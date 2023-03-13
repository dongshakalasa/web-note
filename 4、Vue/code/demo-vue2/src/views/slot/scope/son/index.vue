<style>
    .son {
        background-color: aqua;
    }
</style>
<template>
  <div class="son">
    <slot name="header" :sonInfo="sonInfo"></slot>
  </div>
</template>

<script>
export default {
    name:'son',
    data(){
      return {
        sonInfo:'子组件sonInfo'
      }
    }
}
</script>

<style>

</style>