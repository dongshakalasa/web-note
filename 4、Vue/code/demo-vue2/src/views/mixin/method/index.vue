<template>
    <div>
        {{ number }}
        <button @click="plus">测试方法覆盖</button>
    </div>
</template>

<script>
import mixin from '@/utils/mixin'
export default {
    name:'method',
    mixins:[mixin],
    methods:{
        plus(){
            this.number++
            this.number++
        }
    }
}

</script>