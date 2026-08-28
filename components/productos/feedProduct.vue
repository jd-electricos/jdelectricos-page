<template>
  <main v-if="product" class="bg-[#F5F7FA] pb-20 text-[#1F2937] lg:pb-0">
    <article
      itemscope
      itemtype="https://schema.org/Product"
      class="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-14"
    >
      <breadcrumb
        class="mb-6"
        :category-slug="category.slug"
        :category-name="category.name"
        :subcategory-slug="subcategory.slug"
        :subcategory-name="subcategory.name"
        :product-slug="product.slugProduct"
        :product-name="product.name"
      />

      <div class="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <section
          class="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5"
          :aria-label="`Galería de imágenes de ${productName}`"
        >
          <carouselProducts
            :carousel-image="productImages"
            :alt="productName"
          />
        </section>

        <div class="min-w-0 lg:sticky lg:top-28">
          <div
            class="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]"
          >
            <NuxtLink
              v-if="category.name"
              :to="`/${category.slug}`"
              class="rounded-full bg-[#0B4168]/10 px-3 py-1.5 text-[#0B4168] transition hover:bg-[#0B4168] hover:text-white"
              >{{ category.name }}</NuxtLink
            >
            <span v-if="subcategory.name" class="text-slate-500">{{
              subcategory.name
            }}</span>
          </div>
          <h1
            itemprop="name"
            class="break-words text-3xl font-bold leading-[1.08] tracking-tight text-[#0B4168] sm:text-4xl lg:text-5xl"
          >
            {{ productName }}
          </h1>

          <div class="mt-6 border-y border-slate-200 py-5">
            <p
              class="text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
            >
              Valor comercial
            </p>
            <p class="mt-1 text-2xl font-bold text-[#0B4168] sm:text-3xl">
              {{ displayPrice }}
            </p>
            <p class="mt-1 text-sm font-medium text-emerald-700">
              Disponible para cotización
            </p>
          </div>

          <div
            v-if="category.name === 'Postes'"
            class="mt-6 flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-950"
            role="note"
          >
            <Truck
              class="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
              aria-hidden="true"
            />
            <p class="text-sm leading-6">
              <strong>Entrega en obra disponible.</strong> Consulta cobertura y
              condiciones con uno de nuestros asesores.
            </p>
          </div>

          <dl class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div
              v-for="fact in quickFacts"
              :key="fact.label"
              class="rounded-xl border border-slate-200 bg-white p-3"
            >
              <dt
                class="text-[11px] font-bold uppercase tracking-wider text-slate-500"
              >
                {{ fact.label }}
              </dt>
              <dd class="mt-1 break-words text-sm font-bold text-[#0B4168]">
                {{ fact.value }}
              </dd>
            </div>
          </dl>

          <div class="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#F1B81A] px-6 py-4 text-center text-base font-bold text-[#102A43] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffd04a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F1B81A]/40"
              :aria-label="`Cotizar ${productName} por WhatsApp`"
            >
              <FileText class="h-5 w-5" aria-hidden="true" /> Cotizar este
              producto
            </a>
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-[#0B4168] px-5 py-3 font-extrabold text-[#0B4168] transition hover:bg-[#0B4168] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0B4168]/25"
              aria-label="Hablar con un asesor por WhatsApp"
            >
              <MessageCircle class="h-5 w-5" aria-hidden="true" /> WhatsApp
            </a>
          </div>
          <p class="mt-3 text-center text-xs leading-5 text-slate-500">
            Atención comercial para empresas, contratistas y proyectos en
            Colombia.
          </p>

          <ul
            class="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-2"
            aria-label="Beneficios comerciales"
          >
            <li
              v-for="benefit in benefits"
              :key="benefit"
              class="flex items-start gap-2 text-sm font-semibold text-slate-700"
            >
              <CheckCircle2
                class="mt-0.5 h-4 w-4 shrink-0 text-[#F1B81A]"
                aria-hidden="true"
              />
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>

      <section
        v-if="product.description"
        class="mt-14 grid gap-5 rounded-3xl bg-[#0B4168] p-6 text-white sm:p-8 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12"
        aria-labelledby="description-title"
      >
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.16em] text-[#F1B81A]"
          >
            Información del producto
          </p>
          <h2
            id="description-title"
            class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Descripción y aplicaciones
          </h2>
        </div>
        <p
          itemprop="description"
          class="break-words text-base leading-8 text-slate-100"
        >
          {{ product.description }}
        </p>
      </section>

      <section
        v-if="hasTechnicalParameters"
        class="mt-14 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:mt-20"
        aria-labelledby="technical-title"
      >
        <div class="mb-6 max-w-3xl">
          <p
            class="text-sm font-bold uppercase tracking-[0.16em] text-amber-600"
          >
            Ficha del producto
          </p>
          <h2
            id="technical-title"
            class="mt-2 break-words text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Características técnicas de {{ productName }}
          </h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">
            Consulta las especificaciones disponibles antes de solicitar tu
            cotización.
          </p>
        </div>
        <parametersTable
          :technical-parameters="product.technical_parameters"
          :id_category="product.id_category"
          :id_subcategory="product.id_subcategory"
          :name="productName"
        />
      </section>

      <section
        v-if="subcategory.slug"
        class="mt-14 lg:mt-20"
        aria-labelledby="related-title"
      >
        <h2 id="related-title" class="sr-only">Productos relacionados</h2>
        <suggestionsProducts :data-slug="subcategory.slug" />
      </section>
    </article>

    <div
      class="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur lg:hidden"
    >
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F1B81A] px-5 font-bold text-[#102A43] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F1B81A]/40"
      >
        <FileText class="h-5 w-5" aria-hidden="true" /> Cotizar este producto
      </a>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { CheckCircle2, FileText, MessageCircle, Truck } from "lucide-vue-next";

const carouselProducts = defineAsyncComponent(
  () => import("./carouselProducts.vue"),
);
const suggestionsProducts = defineAsyncComponent(
  () => import("./suggestionsProducts.vue"),
);
const parametersTable = defineAsyncComponent(
  () => import("./parametersTable.vue"),
);
const breadcrumb = defineAsyncComponent(
  () => import("../layout/breadcrumb.vue"),
);

const props = defineProps({ dataProducts: { type: Object, default: null } });
const siteUrl = "https://jdelectricos.com.co";
const fallbackImage = `${siteUrl}/img/logo/LOGO-JD-ICONO.webp`;
const phoneNumber = "573108023277";

const product = computed(() => props.dataProducts || null);
const productName = computed(
  () => product.value?.name?.trim() || "Producto eléctrico",
);
const category = computed(() => product.value?.subCategory?.category || {});
const subcategory = computed(() => product.value?.subCategory || {});
const seo = computed(() => product.value?.seo || {});
const productPath = computed(() => {
  const slug = product.value?.slugProduct?.replace(/^\/+/, "") || "";
  return slug ? `/${slug}` : "/";
});
const productUrl = computed(() => `${siteUrl}${productPath.value}`);
const productImages = computed(() => {
  const images = Array.isArray(product.value?.carouselImg)
    ? product.value.carouselImg.filter(Boolean)
    : [];
  return images.length ? images : [fallbackImage];
});
const primaryImage = computed(() => productImages.value[0]);
const numericPrice = computed(() => Number(product.value?.price));
const hasPublicPrice = computed(
  () => Number.isFinite(numericPrice.value) && numericPrice.value > 1,
);
const displayPrice = computed(() =>
  hasPublicPrice.value
    ? new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(numericPrice.value)
    : "Consultar con un asesor",
);
const hasTechnicalParameters = computed(
  () =>
    Array.isArray(product.value?.technical_parameters) &&
    product.value.technical_parameters.length > 0,
);
const metaTitle = computed(
  () => seo.value.ogtitle?.trim() || `${productName.value} | JD Eléctricos`,
);
const metaDescription = computed(
  () =>
    seo.value.ogdescription?.trim() ||
    product.value?.description?.trim() ||
    `Cotiza ${productName.value} con JD Eléctricos. Atención para proyectos y despachos en Colombia.`,
);
const whatsappLink = computed(() => {
  const message = `Hola JD Eléctricos, quiero cotizar ${productName.value}. Producto: ${productUrl.value}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
});
const quickFacts = computed(() => [
  { label: "Categoría", value: category.value.name || "Producto eléctrico" },
  { label: "Tipo", value: subcategory.value.name || "Material eléctrico" },
  { label: "Cobertura", value: "Colombia" },
  { label: "Respuesta", value: "Atención comercial" },
]);
const benefits = [
  "Asesoría técnica especializada",
  "Atención a empresas y contratistas",
  "Soluciones para proyectos eléctricos",
  "Cobertura comercial en Colombia",
];

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
  ogTitle: metaTitle,
  ogDescription: metaDescription,
  ogType: "website",
  ogUrl: productUrl,
  ogSiteName: "JD Eléctricos",
  ogLocale: "es_CO",
  ogImage: primaryImage,
  ogImageAlt: computed(() => `Imagen de ${productName.value}`),
  twitterCard: "summary_large_image",
  twitterTitle: metaTitle,
  twitterDescription: metaDescription,
  twitterImage: primaryImage,
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
});

const productJsonLd = computed(() => {
  const productSchema = {
    "@type": "Product",
    "@id": `${productUrl.value}#product`,
    name: productName.value,
    description: metaDescription.value,
    image: productImages.value,
    url: productUrl.value,
    category: subcategory.value.name || category.value.name || undefined,
    brand: { "@type": "Brand", name: product.value?.brand || "JD Eléctricos" },
  };
  if (hasPublicPrice.value) {
    productSchema.offers = {
      "@type": "Offer",
      url: productUrl.value,
      priceCurrency: "COP",
      price: numericPrice.value,
      availability: "https://schema.org/InStock",
      seller: { "@id": `${siteUrl}/#organization` },
    };
  }
  const breadcrumbs = [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Productos",
      item: `${siteUrl}/tienda-articulos-electricos`,
    },
  ];
  if (category.value.name)
    breadcrumbs.push({
      "@type": "ListItem",
      position: breadcrumbs.length + 1,
      name: category.value.name,
      item: `${siteUrl}/${category.value.slug}`,
    });
  if (subcategory.value.name)
    breadcrumbs.push({
      "@type": "ListItem",
      position: breadcrumbs.length + 1,
      name: subcategory.value.name,
      item: `${siteUrl}/${subcategory.value.slug}`,
    });
  breadcrumbs.push({
    "@type": "ListItem",
    position: breadcrumbs.length + 1,
    name: productName.value,
    item: productUrl.value,
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "JD Eléctricos",
        url: siteUrl,
        logo: `${siteUrl}/img/logo/LOGO-JD-ICONO.webp`,
      },
      { "@type": "BreadcrumbList", itemListElement: breadcrumbs },
      productSchema,
    ],
  };
});

useHead({
  link: [{ rel: "canonical", href: productUrl }],
  meta: computed(() =>
    hasPublicPrice.value
      ? [
          {
            property: "product:price:amount",
            content: String(numericPrice.value),
          },
          { property: "product:price:currency", content: "COP" },
          { property: "product:availability", content: "in stock" },
        ]
      : [],
  ),
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify(seo.value.jsonld || productJsonLd.value),
      ),
    },
  ],
});
</script>
