export default [
    // 钩子函数
    {
        path: '/keepOne',
        name: "keepOne",
        component: () => import('@/views/keepAlive/keepOne/index.vue')
    },
    // 普通方法合并
    {
        path: '/keepTwo',
        name: "keepTwo",
        component: () => import('@/views/keepAlive/keepTwo/index.vue')
    },
    // 局部混入
    {
        path: '/keepThree',
        name: "keepThree",
        component: () => import('@/views/keepAlive/keepThree/index.vue')
    },
]