<template>
  <div class="components-container">
    <div>
      <tinymce :height='200' v-model="content"></tinymce>
    </div>
    <div class='editor-content' v-html='content'></div>
  </div>
</template>



<script>
import Tinymce from "@/base/Tinymce";

export default {
  components: { Tinymce },
  data() {
    return {
      content: "Tinymce"
    };
  }
};
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
