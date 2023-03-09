<script setup lang="ts">
  import { WhisperButton } from '@whisper-ui/components';
</script>

<template>
  <div class="block">
    <h2>button</h2>
    <WhisperButton type="primary">button</WhisperButton>
    <WhisperButton type="success" round>button</WhisperButton>
    <WhisperButton type="danger" size="small" circle>button</WhisperButton>
    <WhisperButton type="warning" :loading="true" size="small" round>button</WhisperButton>
  </div>
</template>

<style scoped></style>
