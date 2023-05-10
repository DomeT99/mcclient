<script setup lang="ts">
import { EButton, EText } from "easy-kit-component";
</script>

<template>
  <section>
    <HomeHero></HomeHero>

    <section class="container min-h-50 mt-6 mb-6">
      <HomeTopBrand></HomeTopBrand>
    </section>

    <section class="mt-6 bg-tertiary-dark">
      <div class="has-text-centered pt-2">
        <h2>Subscribe to the newsletter</h2>
      </div>
      <div class="mt-6 min-h-25">
        <Form>
          <div class="columns is-vcentered">
            <div
              class="column is-5-desktop is-offset-3-desktop is-12-mobile is-9-tablet"
            >
              <EText
                :place-holder="'Enter your email'"
                class="input is-primary is-medium"
              />
            </div>
            <div class="column is-2-desktop is-12-mobile is-3-tablet">
              <EButton class="button is-secondary is-medium w-100"
                ><strong>Subscribe</strong></EButton
              >
            </div>
          </div>
        </Form>
      </div>
    </section>
  </section>
</template>
