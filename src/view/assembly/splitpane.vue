<template>
    <div class="components-container">
        <code>splitPane 如果你用过<a href='http://codepen.io/' target='_blank'> codepen</a>,<a href='https://jsfiddle.net/' target='_blank'> jsfiddle </a>就不会陌生了
        <a href='https://github.com/PanJiaChen/vue-split-pane' target='_blank'>项目地址</a>
        </code>
        <split-pane v-on:resize="resize" split="vertical">
            <template slot="paneL">
                <div class="left-container"></div>
            </template>
            <template slot="paneR">
                <split-pane split="horizontal">
                    <template slot="paneL">
                        <div class="top-container"></div>
                    </template>
                    <template slot="paneR">
                        <div class="bottom-container">
                        </div>
                    </template>
                </split-pane>
            </template>
        </split-pane>
    </div>
</template>

<script>
import splitPane from "vue-splitpane";
export default {
  components: { splitPane },
  methods: {
    resize() {
      console.log("resize");
    }
  }
};
</script>

<style  scoped>
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #f38181;
  height: 100%;
}

.right-container {
  background-color: #fce38a;
  height: 200px;
}

.top-container {
  background-color: #fce38a;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95e1d3;
  height: 100%;
}
</style>
