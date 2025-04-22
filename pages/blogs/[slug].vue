<template>
    <div v-if="post" class="max-w-3xl mx-auto p-6 space-y-6">
      <h1 class="text-3xl font-bold mb-6">{{ post.title }}</h1>
      <div v-for="(block, index) in post.content" :key="index">
        <img v-if="block.type === 'image'" :src="block.src" :alt="block.alt" class="w-full rounded-lg shadow" />
        <p v-else-if="block.type === 'text'" class="text-lg leading-relaxed text-gray-800 mt-4">
          {{ block.text }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const { data: allPosts } = await useAsyncData('posts', () => $fetch('/api/post'))
  const post = computed(() => allPosts.value.find(p => p.slug === route.params.slug))
  </script>
  