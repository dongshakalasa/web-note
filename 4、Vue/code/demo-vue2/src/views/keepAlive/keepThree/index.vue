<template>
    <div>
        keepThree
        <input type="text" v-model="three">
    </div>
</template>

<script>
export default {
    name: 'keepThree',
    data() {
        return {
            three: ''
        }
    },
    beforeDestroy() {
        alert('keepTwo已销毁')
    }
}
</script>