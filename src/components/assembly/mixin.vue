<template>
  <div class="components-container">
      <div class='component-item'>
        <el-form :model="demo" :rules="demoRules">
          <el-form-item prop="title">
            <md-input icon="search" name="title" placeholder="输入标题" v-model="demo.title">标题</md-input>
          </el-form-item>
        </el-form>
        <code class='code-part'>Material Design 的input</code>
      </div>
  </div>
</template>

<script>
import MdInput from "base/MDinput";
export default {
  components: {
    MdInput
  },
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error("请输入六个字符"));
      } else {
        callback();
      }
    };
    return {
      demo: {
        title: ""
      },
      demoRules: {
        title: [{ required: true, trigger: "change", validator: validate }]
      }
    };
  }
};
</script>

<style scoped>
.component-item {
  margin-top: 100px;
}
.code-part {
  margin-top: 20px;
}
</style>