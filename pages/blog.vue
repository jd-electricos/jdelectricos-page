<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <p class="">{{ message }}</p>
    <h1 class="text-3xl font-bold underline">{{ message }}</h1>
  </div>
</template>
<script setup>
const message = "noticias!";
// seo de blog
useHead({
  title: "",
  meta: [
    {
      name: "description",
      content: "",
    },
    {
      name: "keywords",
      content: "",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Jd Electricos" },
    { name: "publisher", content: "Jd Electricos" },
    {
      property: "og:title",
      content: "",
    },
    {
      property: "og:description",
      content: "",
    },
    { property: "og:url", content: "" },
  ],
  link: [{ rel: "canonical", href: "" }],
});
</script>
