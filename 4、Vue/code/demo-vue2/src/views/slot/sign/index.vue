<template>
  <div>
    组件名：father
    <son>
      <template slot="top">
        <div>
          头部内容
        </div>
      </template>
      <template slot="floor">
        <div>
          底部内容
        </div>
        </template>
    </son>
  </div>
</template>

<script>
import son from './son'
export default {
  name: 'sign',
  components: {
    son
  }
}
</script>

<style></style>