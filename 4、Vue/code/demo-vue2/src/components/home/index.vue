<style>
  .home {
    /* height: 100%; */
    box-sizing: border-box;
  }

  .item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 10px 10px;
  }

  .item button{
    display: inline-block;
    width: 90px;
    height: 40px;
    margin-right: 20px;
    
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }

  h1 {
    text-align: center;
  }
</style>
<template>
  <div class="home">
    <h1>插槽</h1>
    <div class="item">
      <button @click="$router.push('/basic')">基本使用</button>
      <button @click="$router.push('/sign')">具名插槽</button>
      <button @click="$router.push('/default')">后备插槽</button>
      <button @click="$router.push('/scope')">作用域插槽</button>
    </div>
    <h1>混入</h1>
    <div class="item">
        <button @click="$router.push('/hook')">钩子函数</button>
        <button @click="$router.push('/method')">方法合并</button>
        <button @click="$router.push('/part')">局部混入</button>
        <button @click="$router.push('/overall')">全局混入</button>
    <h1>路由缓存</h1>
    <div class="item">
        <button @click="$router.push('/keepOne')">页面一</button>
        <button @click="$router.push('/keepTwo')">页面二</button>
        <button @click="$router.push('/keepThree')">页面三</button>
    </div></div>

  </div>
</template>


<script>
export default {
  name:'home',
  data(){
    return {
      
    }
  }
}
</script>