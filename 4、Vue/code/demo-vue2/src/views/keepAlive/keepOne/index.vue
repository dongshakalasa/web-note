<template>
    <div>
        keepOne
        <input type="text" v-model="one">
    </div>
</template>

<script>
export default {
    name:'keepOne',
    data(){
        return {
            one:''
        }
    },
    activated(){
        alert('缓存组件调用')
    },
    deactivated(){
        alert('缓存组件停用')
    }
}
</script>