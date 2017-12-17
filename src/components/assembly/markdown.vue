<template>
  <div class="components-container">
    <code>
      Markdown 我们这里选用了 <a href="https://github.com/sparksuite/simplemde-markdown-editor" target="_blank">simplemde-markdown-editor</a>
    </code>
     <div class="editor-container">
       <mar-editor id='contentEditor' ref="contentEditor" v-model='content' :height="300" :zIndex='20'></mar-editor>
     </div>
    <el-button @click='markdown2Html' style="margin-top:80px;" type="primary">转为HTML<i class="el-icon-document el-icon--right"></i></el-button>
    <div v-html="html"></div>
  </div>
</template>


<script>
import marEditor from "@/base/MarDowndEditor";
export default {
  components: { marEditor },
  data() {
    return {
      content: "## Simplemde",
      html: ""
    };
  },
  methods: {
    markdown2Html() {}
  }
};
</script>
