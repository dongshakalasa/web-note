<template>
  <div>
    default
    <son>
      <!-- <div>{{info}}</div> -->
    </son>
  </div>
</template>

<script>
import son from './son'
export default {
    name:'default',
    components:{
      son
    },
    data(){
      return {
        info:'父组件内容'
      }
    }
}
</script>

<style>

</style>