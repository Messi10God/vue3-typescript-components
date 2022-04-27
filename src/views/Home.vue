<template>
  <div class="home">
    <div class="text">挨晒都</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    let list: Ref<List[]> = ref([]);
    function add(value: string): void {
      list.value.push({
        value,
        checked: false,
      });
    }
    function checkAll(checked: boolean) {
      list.value.map((t) => {
        t.checked = checked;
        return t;
      });
    }
    function checkItem(newList: List[]) {
      list.value = newList;
    }
    return {
      list,
      add,
      checkAll,
      checkItem,
    };
  },
});
</script>
<style lang="less" scoped>
.home {
  .text {
    color: red;
  }
}
</style>
