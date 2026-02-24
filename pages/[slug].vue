<template>
  <div>
    <div
      v-if="pending"
      class="fixed inset-0 bg-white bg-opacity-100 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <loading />
    </div>

    <div v-else-if="isCategory">
      <feedCategory :products="products" :category="category" />
    </div>

    <div v-else-if="isSubcategory">
      <feedSubcategory :subcategory="subcategory" />
    </div>

    <div v-else-if="isProduct">
      <feedProduct :dataProducts="product" />
    </div>

    <div v-else-if="isBlog">
      <feedBlog :dataBlog="blog" />
    </div>

    <div v-else class="p-10">
      <loading />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, watch } from "vue";
const feedProduct = defineAsyncComponent(
  () => import("~/components/productos/feedProduct.vue"),
);
const feedCategory = defineAsyncComponent(
  () => import("~/components/productos/feedCategory.vue"),
);
const feedSubcategory = defineAsyncComponent(
  () => import("~/components/productos/feedSubcategory.vue"),
); // Asegúrate de crearlo
const feedBlog = defineAsyncComponent(
  () => import("~/components/blog/feedBlog.vue"),
);
const loading = defineAsyncComponent(
  () => import("~/components/layout/loading.vue"),
);
const config = useRuntimeConfig();

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;
const isLoading = ref(true);

const { data, pending } = await useAsyncData(
  `slug-${slug}`,
  async () => {
    const result = {
      isCategory: false,
      isSubcategory: false,
      isProduct: false,
      isBlog: false,
      blog: null,
      category: null,
      subcategory: null,
      product: null,
      products: [],
    };
    try {
      // 1. Buscar categoría
      let categoryRes = null;
      try {
        categoryRes = await $fetch(
          `${config.public.apiBase}/categories/slug/${slug}`,
        );
      } catch {}

      // 👉 Si existe pero NO tiene subcategorías, probar endpoint secundario
      if (
        categoryRes?.id &&
        (!categoryRes.subCategories || categoryRes.subCategories.length === 0)
      ) {
        try {
          categoryRes = await $fetch(
            `${config.public.apiBase}/categories/slug-secondary/${slug}`,
          );
        } catch {}
      }

      if (categoryRes?.id) {
        result.category = categoryRes;
        result.isCategory = true;
        try {
          result.products = await $fetch(
            `${config.public.apiBase}/products/categories/${categoryRes.id}`,
          );
        } catch {}
        return result;
      }

      // 2. Buscar subcategoría
      let subcategoryRes = null;
      try {
        subcategoryRes = await $fetch(
          `${config.public.apiBase}/subcategories/slug/${slug}`,
        );
      } catch {}

      if (subcategoryRes?.id) {
        result.subcategory = subcategoryRes;
        result.isSubcategory = true;
        try {
          result.products = await $fetch(
            `${config.public.apiBase}/products/subcategories/${subcategoryRes.id}`,
          );
        } catch {}
        return result;
      }

      // 3. Buscar producto
      let productRes = null;
      try {
        productRes = await $fetch(
          `${config.public.apiBase}/products/slug/${slug}`,
        );
      } catch {}

      if (Array.isArray(productRes) && productRes.length > 0) {
        result.product = productRes[0];
        result.isProduct = true;
      } else if (productRes?.id) {
        result.product = productRes;
        result.isProduct = true;
      }

      // 4. Buscar blog
      let blogRes = null;
      try {
        blogRes = await $fetch(`${config.public.apiBase}/blog/slug/${slug}`);
      } catch {}

      if (blogRes?.id) {
        result.blog = blogRes;
        result.isBlog = true;
        try {
          result.products = await $fetch(
            `${config.public.apiBase}/blog/${blogRes.id}`,
          );
        } catch {}
        return result;
      }
    } catch (e) {
      console.error("❌ Error general:", e);
    }
    return result;
  },
  { lazy: true },
);

// Computed
const isCategory = computed(() => data.value?.isCategory);
const isSubcategory = computed(() => data.value?.isSubcategory);
const isProduct = computed(() => data.value?.isProduct);
const isBlog = computed(() => data.value?.isBlog);

const category = computed(() => data.value?.category);
const subcategory = computed(() => data.value?.subcategory);
const product = computed(() => data.value?.product);
const products = computed(() => data.value?.products);
const blog = computed(() => data.value?.blog);

// redirection

const normalize = (res) => {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  return [];
};

const similarity = (a, b) => {
  const A = normalizeSlug(a).split(" ");
  const B = normalizeSlug(b).split(" ");

  const setA = new Set(A);
  const setB = new Set(B);

  const intersection = [...setA].filter((x) => setB.has(x));
  const union = new Set([...A, ...B]);

  return intersection.length / union.size;
};
const normalizeSlug = (slug) => {
  return slug
    .toLowerCase()
    .replace(/[-_]/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
};
const keywordBoost = (a, b) => {
  const A = normalizeSlug(a).split(" ");
  const B = normalizeSlug(b).split(" ");

  return A.some((word) => B.includes(word)) ? 0.2 : 0;
};

const getAllSlugs = async () => {
  const base = config.public.apiBase;

  const [catsRes, subsRes, prodsRes, blogsRes] = await Promise.all([
    $fetch(`${base}/categories`).catch(() => []),
    $fetch(`${base}/subcategories`).catch(() => []),
    $fetch(`${base}/products`).catch(() => []),
    $fetch(`${base}/blog`).catch(() => []),
  ]);
  const subs = Array.isArray(subsRes?.items) ? subsRes.items : [];
  const cats = Array.isArray(catsRes?.items) ? catsRes.items : [];
  const prods = Array.isArray(prodsRes) ? prodsRes : [];
  const blogs = normalize(blogsRes);

  return [
    ...cats.map((c) => c.slug),
    ...subs.map((s) => s.slug),
    ...prods.map((p) => p.slugProduct),
    ...blogs.map((b) => b.slug),
  ].filter(Boolean);
};

const findBestMatch = (slug, candidates) => {
  let best = null;
  let highestScore = 0;

  for (const candidate of candidates) {
    const baseScore = similarity(slug, candidate);
    const boost = keywordBoost(slug, candidate);
    const score = baseScore + boost;

    if (score > highestScore) {
      highestScore = score;
      best = candidate;
    }
  }

  return highestScore >= 0.35 ? best : null;
};

watch(
  () => pending.value,
  async (isPending) => {
    if (isPending) return;

    if (
      !isCategory.value &&
      !isSubcategory.value &&
      !isProduct.value &&
      !isBlog.value
    ) {
      const allSlugs = await getAllSlugs();
      const match = findBestMatch(slug, allSlugs);

      if (match) {
        router.replace(`/${match}`);
      } else {
        router.replace("/");
      }
    }
  },
  { immediate: true },
);
</script>
