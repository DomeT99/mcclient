<script setup lang="ts">
const dynamicTitle = computed(() => useUpperCase(useRoute().name?.toString()!));
</script>

<template>
  <VitePwaManifest />
  <Head>
    <Title
      >Micro Commerce -
      {{ dynamicTitle === "Index" ? "Home" : dynamicTitle }}</Title
    >
    <Navbar />
    <section class="min-h-100">
      <slot></slot>
    </section>
  </Head>
  
  <Footer />
</template>
<style scoped>
.min-h-100{
  min-height: 100vh;
}
</style>