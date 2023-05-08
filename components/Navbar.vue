<script setup lang="ts">
import { EButton } from "easy-kit-component";

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
function scrollToTop() {
  const navbar = document.querySelector(".navbar");
  const trigger = window.scrollY;
  const navbarHeight = navbar!.clientHeight;

  if (trigger >= navbarHeight) {
    navbar!.setAttribute("style", "background-color: hsl(0 100% 100% / 1)");
  } else {
    navbar!.setAttribute("style", "background-color: hsl(0 100% 100% / 0.7)");
  }
}
</script>

<template>
  <nav
    @scroll="scrollToTop"
    class="navbar is-fixed-top"
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
            <NuxtLink class="navbar-item" to="/electronics"
              >Electronics</NuxtLink
            >
            <NuxtLink class="navbar-item" to="/menclothing"
              >Men's Clothing</NuxtLink
            >
            <NuxtLink class="navbar-item" to="/womenclothing"
              >Women's Clothing</NuxtLink
            >
            <NuxtLink class="navbar-item" to="/jewelery"> Jewelery </NuxtLink>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <EButton class="button is-primary">
              <strong>Login</strong>
            </EButton>
            <EButton class="button is-tertiary">
              <strong>Sign up</strong>
            </EButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
