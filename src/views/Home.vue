<template>
  <div class="home">
    <Button type="primary" size="large" disabled>搜索</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from "vue";
import Button from "@/components/Button/index.vue";

export default defineComponent({
  name: "Home",
  components: { Button },
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
