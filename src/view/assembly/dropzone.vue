<template>
  <div class="components-container">
    <code>
      基于<a class='link-type' href='https://github.com/rowanwins/vue-dropzone'> dropzone </a>
    </code>
    <div class="editor-container">
      <dropzone  v-on:dropzone-removedFile="dropzoneR" v-on:dropzone-success="dropzoneS" id="myVueDropzone" url="https://httpbin.org/post"></dropzone>
    </div>
  </div>
</template>

<script>
import Dropzone from 'base/Dropzone'

export default {
  components: { Dropzone },
  methods: {
    dropzoneS(file) {
      console.log(file)
      this.$message({ message: '上传成功', type: 'success' })
    },
    dropzoneR(file) {
      console.log(file)
      this.$message({ message: '删除成功', type: 'success' })
    }
  }
}
</script>
