<template>
  <div class="components-container">
    <mac-down></mac-down>
  </div>
</template>


<script>
import macDown from "@/base/macDown";
  export default {
  components: { macDown },
  data() {
    return {
      content: "Tinymce"
    };
  }
};
</script>
