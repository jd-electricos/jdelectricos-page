<template>
  <div v-if="post" class="">
      <div v-html="post.content"></div>
  </div>
</template>

<script setup>
const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  $fetch(`http://localhost:5000/api/blog/slug/${route.params.slug}`)
);
</script>
