<script setup lang="ts">
const dynamicTitle = computed(() => {
  const routeName = useRoute().name?.toString()!;

  const routeNameUpperCase = useUpperCase(routeName);

  const computedRoute =
    routeNameUpperCase === "Index" ? "Home" : routeNameUpperCase;

  return computedRoute;
});
</script>

<template>
  <VitePwaManifest />
  <Head>
    <Title>Micro Commerce - {{ dynamicTitle }}</Title>
    <Navbar />
    <section class="min-h-100">
      <slot></slot>
    </section>
  </Head>

  <Footer>
    <p>
      <strong>Micro Commerce</strong> by
      <a href="https://linktr.ee/domenicotenace">Domenico Tenace</a>. The source
      code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
  </Footer>
</template>
