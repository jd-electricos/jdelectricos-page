<template>
  <article
    class="group flex h-[500px] w-[320px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-xl hover:shadow-slate-900/10 sm:h-[525px] sm:w-[360px] lg:h-[540px] lg:w-[390px]"
  >
    <NuxtLink
      :to="postUrl"
      class="relative block h-[180px] shrink-0 overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 sm:h-[203px] lg:h-[219px]"
      :aria-label="`Leer ${props.data.title || 'noticia de JD Eléctricos'}`"
    >
      <NuxtImg
        :src="currentImage"
        width="780"
        height="439"
        sizes="320px sm:360px lg:390px"
        :title="props.data.title || 'Noticias JD Eléctricos'"
        :alt="imageAlt"
        loading="lazy"
        decoding="async"
        class="h-full w-full transition duration-500 group-hover:scale-[1.03]"
        :class="usingFallback ? 'bg-slate-950 object-contain p-10' : 'object-cover'"
        @error="handleImageError"
      />
      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/35 to-transparent"
        aria-hidden="true"
      />
    </NuxtLink>

    <div class="flex min-w-0 flex-1 flex-col overflow-hidden p-5 sm:p-6">
      <div class="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <AlarmClockCheck class="h-4 w-4 text-yellow-600" aria-hidden="true" />
        <time :datetime="isoDate">{{ formattedDate }}</time>
      </div>

      <NuxtLink
        :to="postUrl"
        class="block h-14 min-w-0 overflow-hidden rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
      >
        <h2 class="line-clamp-2 break-words [overflow-wrap:anywhere] text-xl font-extrabold leading-snug text-slate-900 transition group-hover:text-yellow-700">
          {{ props.data.title || "Noticia de JD Eléctricos" }}
        </h2>
      </NuxtLink>

      <p class="mt-3 h-[72px] shrink-0 line-clamp-3 break-words [overflow-wrap:anywhere] text-sm leading-6 text-slate-600">
        {{ props.data.previewText || "Conoce información y novedades del sector eléctrico." }}
      </p>

      <NuxtLink
        :to="postUrl"
        class="mt-auto inline-flex items-center self-start rounded-lg pt-5 font-bold text-slate-900 transition hover:text-yellow-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-500"
        :aria-label="`Leer artículo: ${props.data.title || 'Noticia de JD Eléctricos'}`"
      >
        Leer artículo
        <ArrowRight
          class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { AlarmClockCheck, ArrowRight } from "lucide-vue-next";

const fallbackImage = "/img/logo/LOGO-JD-ICONO.webp";

const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => ({
      title: "",
      slug: "",
      image: "",
      previewText: "",
      createdAt: "",
    }),
  },
});

const currentImage = ref(props.data.image || fallbackImage);
const usingFallback = computed(() => currentImage.value === fallbackImage);
const postUrl = computed(() => `/${props.data.slug || "blog"}`);
const imageAlt = computed(() =>
  usingFallback.value
    ? "Logo de JD Eléctricos"
    : `Imagen del artículo ${props.data.title || "de JD Eléctricos"}`,
);
const isoDate = computed(() =>
  typeof props.data.createdAt === "string" ? props.data.createdAt.split("T")[0] : "",
);
const formattedDate = computed(() => {
  if (!isoDate.value) return "Fecha no disponible";

  const date = new Date(`${isoDate.value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate.value;

  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
});

const handleImageError = () => {
  if (currentImage.value !== fallbackImage) currentImage.value = fallbackImage;
};

watch(
  () => props.data.image,
  (image) => {
    currentImage.value = image || fallbackImage;
  },
);
</script>
