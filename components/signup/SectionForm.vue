<script setup lang="ts">
import { EButton } from "easy-kit-component";
</script>

<template>
  <div class="columns is-flex is-vcentered min-h-85">
    <div class="column is-6 is-offset-3">
      
      <Form class="form bg-tertiary w-100 p-4">
        <h3 class="has-text-centered">I'm a new customer!</h3>
        <SignupContentForm
          v-for="content of contentForm"
          :label="content.label"
        />
        <div class="columns p-4">
          <div class="column is-8 is-offset-2">
            <EButton class="button is-quaternary is-medium w-100"
              >Register</EButton
            >
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
