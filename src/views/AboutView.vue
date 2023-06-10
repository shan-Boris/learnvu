<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "setTitle", newTitle: string): void;
}>();

onMounted(() => {
  emit("setTitle", "О нас");
});
</script>

<style scoped></style>
