<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Editor } from '@tiptap/vue-3';
import { computed, ref } from 'vue';
const fontSizes = ref<number[]>([8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72, 96]);
const currentFontSize = ref<number>(12);

function setFontSize(size: number) {
  editor
  .value
    .chain()
    .focus()
    .setFontSize(`${size}px`)
    .run();
}

const props = defineProps<{ editor: Editor }>();
const editor = computed(() => props.editor);
</script>

<template>
  <div class="editor-buttons-group">
    |
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
    <input
      type="color"
      @input="
        editor
          .chain()
          .focus()
          .setColor(($event.target as HTMLInputElement).value)
          .run()
      "
      :value="editor.getAttributes('textStyle').color"
      list="presetColors"
      class="text-color">
    </input>
    <input
      type="color"
      @input="
        editor
          .chain()
          .focus()
          .setBackgroundColor(($event.target as HTMLInputElement).value)
          .run()
      "
      :value="editor.getAttributes('textStyle').backgroundColor"
      list="presetColors"
      class="text-color">
    </input>
    <select v-model="currentFontSize" @change="setFontSize(currentFontSize)"
    :class="{'is-active': editor.isActive('textStyle', {fontSize: currentFontSize.toString() + 'px'})}">
      <option
        v-for="size in fontSizes"
        :key="size"
        :value="size"
        
        >
        {{ size }}px
      </option>
    </select>
     <button
      @click="editor.chain().focus().toggleStrike().run()"
      :class="{ 'is-active': editor!.isActive('strike') }">
      <Icon icon="icon-park-outline:strikethrough" width="16" height="16" />
    </button>
    
    |
      <button
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor!.isActive('codeBlock') }">
      <Icon icon="fluent:code-block-16-regular" width="16" height="16" />
    </button>
  </div>
</template>

<style scoped>
.editor-buttons-group {
  margin-bottom: 10px;
}
button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
}
button:hover {
  background-color: #e0e0e0;
}

svg {
  vertical-align: middle;
}
button.is-active {
  background-color: #a8a8a8;
}
input.text-color {
  width: 26px;
  height: 26px; 
 vertical-align: middle;
  border: none;
  cursor: pointer;
  background-color: #ffffff;

}

</style>
