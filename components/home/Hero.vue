<template>
  <section class="hero is-secondary is-halfheight">
    <div class="hero-body">
      <div class="container">
        <p class="title has-text-white"><slot name="title"></slot></p>
        <p class="subtitle">
          <slot name="subtitle"></slot>
        </p>
      </div>
    </div>
  </section>
</template>
