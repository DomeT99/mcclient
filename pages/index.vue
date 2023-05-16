<script setup lang="ts">
const brands = [
  "Adidas",
  "Nike",
  "Levis",
  "Apple",
  "Samsung",
  "Sony",
  "Adidas",
  "Nike",
  "Levis",
  "Apple",
  "Samsung",
  "Sony",
];
</script>

<template>
  <section>
    <HomeHero>
      <template v-slot:title>Micro Commerce</template>
      <template v-slot:subtitle>Micro prices, macro selection</template>
    </HomeHero>

    <section class="container min-h-50 mt-6 mb-6">
      <HomeTopBrand :names="brands" />
    </section>

    <section class="mt-6 bg-tertiary-dark">
      <HomeNewsLetter />
    </section>
  </section>
</template>
