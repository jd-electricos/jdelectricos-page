<template>
  <div
    class="flex flex-col bg-linear-to-b from-gray-950 via-gray-800 to-gray-700 min-h-screen"
  >
    <loading class="bg-white" v-if="isLoading" />
    <div v-else>
      <Header />
    </div>
    <div class="flex gap-10 p-6 justify-center md:flex-row flex-col">
      <div>
        <ClientOnly>
          <WompiForm
            @loading:start="isLoading = true"
            @loading:end="isLoading = false"
          />
        </ClientOnly>
      </div>
      <div>
        <div class="hidden md:block h-full border-l border-gray-300" />
      </div>
      <div>
        <info />
      </div>
    </div>
  </div>
</template>

<script setup>
import WompiForm from "@/components/pays/wompiForm.vue";
import Info from "@/components/pays/info.vue";
import Header from "@/components/pays/header.vue";
import loading from "~/components/layout/loading.vue";
const isLoading = ref(false);
</script>

<style></style>
