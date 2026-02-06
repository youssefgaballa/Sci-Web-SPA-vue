<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import EditorToolbar from './EditorToolbar.vue';

const editor = useEditor({ content: '<p></p>', extensions: [StarterKit] });
</script>

<template>
  <div class="editor-container" v-if="editor">
    <EditorToolbar :editor="editor" v-if="editor" />
    <editor-content :editor="editor" />
  </div>
</template>

<style scoped>
.editor-container {
  border: 1px solid #ccc;
  padding: 10px;
  width: 60%;
  height: 100%;
}
</style>
