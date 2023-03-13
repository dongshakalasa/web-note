<style>
  .father {
    width: 400px;
    height: 400px;
    background-image: linear-gradient(to right, red,pink);
  }
</style>
<template>
  <div class="father">
    father
    <son>
      <div>
        {{info}}
      </div>
    </son>
  </div>
</template>

<script>
import son from './son/index.vue'
export default {
    name:'basic',
    components: {
      son
    },
    data(){
      return {
        info:'父组件data的info'
      }
    }
}
</script>

<style>

</style>