<template>
    <div>
        {{ number }}
        <button @click="plus">测试更新</button>
    </div>
</template>

<script>
import mixin from '@/utils/mixin'
export default {
    name:'hook',
    mixins:[mixin],
    // 声明周期
    beforeCreate() {
        console.log('hook -- beforeCreate')
    },
    created() {
        console.log('hook -- created');
    },
    beforeMount() {
        console.log('hook -- beforeMount')
    },
    mounted() {
        console.log('hook -- mounted')
    },
    beforeUpdate() {
        console.log('hook -- beforeUpdate')
    },
    updated() {
        console.log('hook -- updated')
    },
    beforeDestroy() {
        console.log('hook -- beforeDestroy')
    },
    destroyed() {
        console.log('hook -- destroyed')
    },
}

</script>