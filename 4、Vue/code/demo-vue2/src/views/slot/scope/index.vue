<template>
  <div>
    组件名：father
    <son>
      <!-- <template v-slot:header="scope">
        <div>
          {{ scope.sonInfo }}
        </div>
      </template> -->
      <template slot="header" slot-scope="scope">
          <div>
            {{ scope.sonInfo }}
          </div>
        </template>
    </son>
  </div>
</template>

<script>
import son from './son'
export default {
    name:'scope',
    components:{
      son
    }
}
</script>

<style>

</style>