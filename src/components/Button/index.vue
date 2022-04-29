<template>
  <button :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import type {PropType} from 'vue'
import { BtnType, BtnSize } from "./typing";

const props = defineProps({
  type: {
    type: String as PropType<BtnType>,
    default: "default",
  },
  size: {
    type: String as PropType<BtnSize>,
    default: "middle",
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
const classes = computed(() => {
  return {
    'lol-btn': true,
    [`lol-btn-${props.type}`]: props.type,
    [`lol-btn-${props.size}`]: props.size === 'middle' ? '': props.size,
    [`lol-btn-disabled`]: props.disabled
  };
});
const emit = defineEmits(["click"]);
const handleClick = () => {
  if(props.loading || props.disabled) {
    return ;
  }
  emit("click");
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
