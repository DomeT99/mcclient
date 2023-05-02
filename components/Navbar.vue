<script setup lang="ts"></script>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="@/public/icons/icon-144x144.png"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> Home </a>

        <a class="navbar-item"> Search </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Categories</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Electronics</a>
            <a class="navbar-item">Men's Clothing</a>
            <a class="navbar-item">Women's Clothing</a>
            <a class="navbar-item"> Jewelery </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-primary">
              <strong>Cart</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
