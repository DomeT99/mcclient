<script setup lang="ts">
interface TopBrand {
  names?: string[];
}

const props = defineProps<TopBrand>();
</script>
<template>
  <header class="ml-2">
    <h3>Top Brand</h3>
  </header>
  <div class="columns is-multiline is-mobile mt-4">
    <div class="column is-half" v-for="name of props.names" :key="name">
      <p class="mt-4">{{ name }}</p>
    </div>
  </div>
</template>
