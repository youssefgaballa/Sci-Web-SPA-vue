<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Editor } from '@tiptap/vue-3';
import { computed } from 'vue';
const props = defineProps<{ editor: Editor }>();
const editor = computed(() => props.editor);
</script>

<template>
  <div class="editor-buttons-group">
    <button
      @click="editor.chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor!.isActive('bold') }">
      <Icon icon="glyphs:b-bold" width="16" height="16" />
    </button>
    <button
      @click="editor.chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor!.isActive('italic') }">
      <Icon icon="tabler:italic" width="16" height="16" />
    </button>
    <button
      @click="editor.chain().focus().toggleUnderline().run()"
      :class="{ 'is-active': editor!.isActive('underline') }">
      <Icon icon="tabler:underline" width="16" height="16" />
    </button>
    <button
      @click="editor.chain().focus().toggleStrike().run()"
      :class="{ 'is-active': editor!.isActive('strike') }">
      <Icon icon="icon-park-outline:strikethrough" width="16" height="16" />
    </button>
    <button
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor!.isActive('codeBlock') }">
      <Icon icon="fluent:code-block-16-regular" width="16" height="16" />
    </button>
  </div>
</template>

<style scoped></style>
