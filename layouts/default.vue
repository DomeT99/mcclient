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
    <section>
      <slot></slot>
    </section>
    <Footer />
  </Head>
</template>
