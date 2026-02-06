<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { CharacterCount } from '@tiptap/extensions';

import EditorToolbar from './EditorToolbar.vue';

const editor = useEditor({
  content: '<p></p>',
  extensions: [StarterKit, TextStyleKit, CharacterCount],
});
</script>

<template>
  <div class="editor-container" v-if="editor">
    <EditorToolbar :editor="editor" v-if="editor" />
    <editor-content :editor="editor" />
    <div class="editor-metadata">
      {{ editor?.storage.characterCount.characters() }} characters
      <br />
      {{ editor?.storage.characterCount.words() }} words
    </div>
  </div>
</template>

<style scoped>
.editor-container {
  border: 1px solid #ccc;
  padding: 10px;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.editor-metadata {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
}
</style>
