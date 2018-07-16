<template>
  <h1 v-if="false"><slot>请输入标题内容</slot></h1>
</template>

<script>
export default {
  created() {
    this.updateTitle();
  },
  beforeUpdate() {
    this.updateTitle();
  },
  methods: {
    updateTitle() {
      let slots = this.$slots.default;
      if (
        typeof slots === "undefined" ||
        slots.length < 1 ||
        typeof slots[0].text !== "string"
      )
        return;
      let { text } = slots[0];
      let { title } = document;
      if (text !== title) {
        document.title = text;
        if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          const hackIframe = document.createElement("iframe");
          hackIframe.style.display = "none";
          hackIframe.src = "/static/html/fixIosTitle.html?r=" + Math.random();
          document.body.appendChild(hackIframe);
          setTimeout(_ => {
            document.body.removeChild(hackIframe);
          }, 300);
        }
      }
    }
  }
};
</script>
