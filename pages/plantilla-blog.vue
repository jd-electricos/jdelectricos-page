<template>
  <article class="max-w-4xl mx-auto p-6 space-y-5 pt-16">
    <div v-for="slug in slugs" :key="slug">
      <p>
        site:https://jdelectricos.com.co/{{ slug.slug }}
      </p>
    </div>
  </article>
</template>
<script setup>
const slugs = ref();
const fecthData = async () => {
  const response = await fetch(`http://localhost:5000/api/blog`);
  const data = await response.json();
  slugs.value = data;
  console.log(data.map((x) => x.slug));
};
fecthData();
</script>
