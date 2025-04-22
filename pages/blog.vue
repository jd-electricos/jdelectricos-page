<template>
  <div class="max-w-5xl mx-auto p-6 space-y-8">
    <h1 class="text-3xl font-bold mb-4">Blog abig</h1>

    <div v-for="post in posts" :key="post.id" class="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <NuxtLink :to="`/blogs/${post.slug}`" class="text-2xl font-semibold text-blue-600 hover:underline">
        {{ post.title }}
      </NuxtLink>
      <p class="text-gray-600 mt-2">
        {{ post.content.find(b => b.type === 'text')?.text.substring(0, 100) }}...
      </p>
    </div>
  </div>
</template>

<script setup>
// ✅ Cambiamos a useAsyncData
const { data: posts } = await useAsyncData('posts', () => $fetch('/api/post'))
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


