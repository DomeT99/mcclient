<script setup lang="ts">

onMounted(() => {
  openBurger();
});

function openBurger() {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  $navbarBurgers.forEach((element) => {
    element.addEventListener("click", () => {
      const target = element.dataset.target;
      const $target = document.getElementById(target) as HTMLElement;

      element.classList.toggle("is-active");

      $target.classList.toggle("is-active");
    });
  });
}
</script>

<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="@/public/icons/icon-144x144.png" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-id"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-id" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink class="navbar-item is-hoverable" to="/"> Home </NuxtLink>

        <NuxtLink class="navbar-item is-hoverable" to="/search">
          Search
        </NuxtLink>

        <div class="navbar-item is-hoverable">
          <a class="navbar-link is-hoverable"> Categories</a>

          <div class="navbar-dropdown is-hoverable">
            <NuxtLink class="navbar-item" to="/categories/electronics"
              >Electronics</NuxtLink
            >
            <NuxtLink class="navbar-item" to="/categories/mensclothing"
              >Men's Clothing</NuxtLink
            >
            <NuxtLink class="navbar-item" to="/categories/womensclothing"
              >Women's Clothing</NuxtLink
            >
            <NuxtLink class="navbar-item" to="/categories/jewelery">
              Jewelery
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <NuxtLink class="button is-primary" to="/customer/login">
                <strong>Login</strong>
            </NuxtLink>
            <NuxtLink class="button is-tertiary" to="/customer/signup">
                <strong>Sign up</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
