<style>
.son {
  background-color: aqua;
}
</style>
<template>
  <div class="son">
    <slot name="top"></slot>
    组件名：son
    <slot name="floor"></slot>
  </div>
</template>

<script>
export default {
  name: 'son'
}
</script>

<style></style>