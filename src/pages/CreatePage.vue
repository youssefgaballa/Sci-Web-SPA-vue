<script setup lang="ts">
import RichTextEditor from '@/common/components/editor/RichTextEditor.vue'
</script>

<template>
  <form class="create-page-form">
    <div class="edit-content-container">
      <RichTextEditor />
    </div>
  </form>
</template>

<style scoped>
.edit-content-container {
  width: 60%;
  padding: 20px;
}

.create-page-form {
  width: 100%;
  height: 100%;
}
</style>
