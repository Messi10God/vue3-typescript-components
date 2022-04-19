<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @add="add" />
    <List :list="list" @checkItem="checkItem"></List>
    <Footer :list="list" @checkAll="checkAll"></Footer>
    <Input />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue'; // @ is an alias to /src
import List from '@/components/List.vue'; // @ is an alias to /src
import Input from '@/components/Input'; // @ is an alias to /src
// interface List { 
//     value: string,
//     checked: boolean
//   }


export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,Footer,List, Input
  },
  setup() {
    let list: Ref<List[]> = ref([]);
    function add(value: string): void { 
      list.value.push({
        value,
        checked: false
      })
    }
    function checkAll(checked: boolean) {
      list.value.map(t => {
        t.checked = checked
        return t
      })
    }
    function checkItem(newList: List[]) {
      list.value = newList
    }
    return { 
      list,
      add,
      checkAll,
      checkItem
    }
  }
});
</script>
