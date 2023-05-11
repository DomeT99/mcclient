<script setup lang="ts">
import { EButton, EText } from "easy-kit-component";
</script>

<template>
  <Form>
    <div class="columns">
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
</template>
