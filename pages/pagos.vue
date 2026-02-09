<template>
  <div class="flex gap-10 p-16 justify-center">
    <div>
      <ClientOnly>
        <WompiForm />
      </ClientOnly>
    </div>
    <info />
  </div>
</template>

<script setup>
import WompiForm from "@/components/pays/wompiForm.vue";
import Info from "@/components/pays/info.vue";
</script>

<style></style>
