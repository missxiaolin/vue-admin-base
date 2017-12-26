<template>
  <div class="createPost-container">

    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">
        <sticky :className="'sub-navbar '+postForm.status">
            <template v-if="fetchSuccess">
                <div style="display:inline-block">

                    <el-dropdown trigger="click">
                    <router-link style="margin-right:15px;" :to="{ path:'create'}">
                        <el-button type="info">创建form</el-button>
                    </router-link>
                    <el-button>{{!postForm.comment_disabled?'评论已打开':'评论已关闭'}}<i class="el-icon-caret-bottom el-icon--right"></i></el-button>
                    <el-dropdown-menu class="no-padding no-hover" slot="dropdown">
                        <el-dropdown-item>
                        <el-radio-group style="padding: 10px;" v-model="postForm.comment_disabled">
                            <el-radio :label="true">关闭评论</el-radio>
                            <el-radio :label="false">打开评论</el-radio>
                        </el-radio-group>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>

                <el-dropdown trigger="click">
                    <el-button>
                    平台<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu class="no-border" slot="dropdown">
                    <el-checkbox-group v-model="postForm.platforms" style="padding: 5px 15px;">
                        <el-checkbox v-for="item in platformsOptions" :label="item.key" :key="item.key">
                        {{item.name}}
                        </el-checkbox>
                    </el-checkbox-group>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-dropdown trigger="click">
                    <el-button>
                    外链<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu class="no-padding no-border" style="width:300px" slot="dropdown">
                    <el-form-item label-width="0px" style="margin-bottom: 0px" prop="source_uri">
                        <el-input placeholder="请输入内容" v-model="postForm.source_uri">
                        <template slot="prepend">填写url</template>
                        </el-input>
                    </el-form-item>
                    </el-dropdown-menu>
                </el-dropdown>

                <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm()">发布
                </el-button>
                <el-button v-loading="loading" type="warning" @click="draftForm">草稿</el-button>

            </template>

            <template v-else>
                <el-tag>发送异常错误,刷新页面,或者联系程序员</el-tag>
            </template>
        </sticky>

        <div class="createPost-main-container">
            <el-row>
                <el-col :span="21">
                    <el-form-item style="margin-bottom: 40px;" prop="title">
                        <MDinput name="name" v-model="postForm.title" required :maxlength="100">
                            标题
                        </MDinput>
                        <span v-show="postForm.title.length>=26" class='title-prompt'>app可能会显示不全</span>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
    </el-form>

  </div>
</template>

<script>
import Sticky from "base/Sticky"; // 粘性header组件
import MDinput from 'base/MDinput'
export default {
  name: "articleDetail",
  components: { Sticky, MDinput },
  data() {
    const validateRequire = (rule, value, callback) => {
        console.log(rule.field)
      if (value === "") {
        this.$message({
          message: rule.field + "为必传项",
          type: "error"
        });
        callback(false);
      } else {
        callback();
      }
    };
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validateURL(value)) {
          callback();
        } else {
          this.$message({
            message: "外链url填写不正确",
            type: "error"
          });
          callback(false);
        }
      } else {
        callback();
      }
    };
    return {
      postForm: {
        title: "", // 文章题目
        content: "", // 文章内容
        content_short: "", // 文章摘要
        source_uri: "", // 文章外链
        image_uri: "", // 文章图片
        source_name: "", // 文章外部作者
        display_time: undefined, // 前台展示时间
        id: undefined,
        platforms: ["a-platform"]
      },
      fetchSuccess: true,
      loading: false,
      userLIstOptions: [],
      platformsOptions: [
        { key: "a-platform", name: "a-platform" },
        { key: "b-platform", name: "b-platform" },
        { key: "c-platform", name: "c-platform" }
      ],
      rules: {
        image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        source_uri: [{ validator: validateSourceUri, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.postForm.display_time = parseInt(this.display_time / 1000);
      console.log(this.postForm);
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$notify({
            title: "成功",
            message: "发布文章成功",
            type: "success",
            duration: 2000
          });
          this.postForm.status = "published";
          this.loading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    draftForm() {
      if (
        this.postForm.content.length === 0 ||
        this.postForm.title.length === 0
      ) {
        this.$message({
          message: "请填写必要的标题和内容",
          type: "warning"
        });
        return;
      }
      this.$message({
        message: "保存成功",
        type: "success",
        showClose: true,
        duration: 1000
      });
      this.postForm.status = "draft";
    }
  }
};
</script>

<style lang="scss">
@import "~common/css/mixin.scss";
.title-prompt {
  position: absolute;
  right: 0px;
  font-size: 12px;
  top: 10px;
  color: #ff4949;
}
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
    .editor-container {
      min-height: 500px;
      margin: 0 0 30px;
      .editor-upload-btn-container {
        text-align: right;
        margin-right: 10px;
        .editor-upload-btn {
          display: inline-block;
        }
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>