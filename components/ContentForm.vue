<script setup lang="ts">
import { EText } from "easy-kit-component";

export interface ContentForm {
  label: string;
  wrapperClasses?: string;
  inputClasses?: string;
}

const props = defineProps<ContentForm>();
</script>

<template>
  <div :class="props.wrapperClasses ?? 'column is-8 is-offset-2'">
    <label>{{ props.label }}</label>
    <EText :class="props.inputClasses ?? 'input is-primary'" />
  </div>
</template>
