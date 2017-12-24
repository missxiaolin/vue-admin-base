<template>
  <div class="components-container">
    <code>
      这里核心代码用的是
      <a class='link-type' href='//github.com/dai-siki/vue-image-crop-upload'> vue-image-crop-upload</a>
    </code>

    <pan-thumb :image='image'></pan-thumb>

    <el-button
      type="primary"
      icon="upload"
      style="position: absolute;bottom: 15px;margin-left: 40px;">
      修改头像
    </el-button>

    <image-cropper></image-cropper>
  </div>
</template>

<script>
import ImageCropper from "base/ImageCropper";
import PanThumb from "base/PanThumb";

export default {
  components: { ImageCropper, PanThumb },
  data() {
    return {
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    }
  }
};
</script>


