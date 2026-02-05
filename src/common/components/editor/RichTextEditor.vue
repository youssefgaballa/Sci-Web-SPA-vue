<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import { Icon } from '@iconify/vue'

const editor = useEditor({
  content: '<p></p>',
  extensions: [StarterKit],
})
</script>

<template>
  <div class="editor-container" v-if="editor">
    <div class="editor-buttons-group">
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor!.isActive('bold') }"
      >
        <Icon icon="glyphs:b-bold" width="16" height="16" />
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor!.isActive('italic') }"
      >
        <Icon icon="tabler:italic" width="16" height="16" />
      </button>
      <button
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor!.isActive('underline') }"
      >
        <Icon icon="tabler:underline" width="16" height="16" />
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor!.isActive('strike') }"
      >
        <Icon icon="icon-park-outline:strikethrough" width="16" height="16" />
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor!.isActive('codeBlock') }"
      >
        <Icon icon="fluent:code-block-16-regular" width="16" height="16" />
      </button>
    </div>
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

.editor-buttons-group {
  margin-bottom: 10px;
}
</style>
