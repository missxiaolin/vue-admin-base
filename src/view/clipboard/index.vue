<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="use clipboard  directly" name="directly">
        <el-input v-model="inputData" placeholder="请输入内容" style='width:400px;'></el-input>
        <el-button type="primary" icon="document" @click='handleCopy(inputData,$event)'>copy</el-button>
      </el-tab-pane>
      <el-tab-pane label="use clipboard by v-directive" name="v-directive">
        <el-input v-model="inputData" placeholder="请输入内容" style='width:400px;'></el-input>
        <el-button type="primary" icon="document" v-clipboard:copy='inputData' v-clipboard:success='clipboardSuccess'>copy</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import clip from "common/js/clipboard/clip"; // use clipboard directly
import clipboard from "common/js/clipboard/index.js"; // use clipboard by v-directive

export default {
  directives: {
    clipboard
  },
  data() {
    return {
      activeName: "directly",
      inputData: "https://github.com/missxiaolin/vue-admin-base.git"
    };
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event);
    },
    clipboardSuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500
      });
    }
  }
};
</script>

