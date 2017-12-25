<template>
  <div class="components-container">
      <code>Sticky header 当页面滚动到预设的位置会吸附在顶部</code>
      <sticky className="sub-navbar">
      </sticky>
  </div>
</template>

<script>
import Sticky from "base/Sticky/index";

export default {
  components: { Sticky },
  data() {
    
  }
};
</script>


<style scoped>
.components-container {
  height: 2000px;
}
.time-container {
  display: inline-block;
}
</style>