<template>
  <div class="components-container">
    <code>
        drag-list base on 
        <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">
        Vue.Draggable
        </a>
    </code>
    <div class="editor-container">
       <dnd-list :list1="list1" :list2="list2" list1Title="头条列表" list2Title="文章池"></dnd-list>
    </div>
  </div>
</template>

<script>
import DndList from "base/twoDndList";

export default {
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: [
        {id: 1,author: "小林",title: 'title1'},
        {id: 2,author: "小林",title: 'title2'},
        {id: 3,author: "小林",title: 'title3'},
        {id: 4,author: "小林",title: 'title4'},
        {id: 5,author: "小林",title: 'title5'},
        {id: 6,author: "小林",title: 'title6'},
        {id: 7,author: "小林",title: 'title7'},
        {id: 8,author: "小林",title: 'title8'},
        {id: 9,author: "小林",title: 'title9'},
        {id: 10,author: "小林",title: 'title10'},
        {id: 11,author: "小林",title: 'title11'},
        {id: 12,author: "小林",title: 'title12'},
      ]
    };
  },
  created() {
    this.list1 = this.list2.splice(0, 5);
  },
  methods: {}
};
</script>