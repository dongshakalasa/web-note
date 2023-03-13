<style>
    .son {
        background-color: aqua;
    }
</style>
<template>
  <div class="son">
    son
    <slot>
      <div>插槽默认内容</div>
    </slot>
  </div>
</template>

<script>
export default {
    name:'son'
}
</script>

<style>

</style>