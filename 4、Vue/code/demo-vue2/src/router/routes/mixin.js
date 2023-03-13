export default [
    // 钩子函数
    {
        path: '/hook',
        name: "hook",
        component: () => import('@/views/mixin/hook/index.vue')
    },
    // 普通方法合并
    {
        path: '/method',
        name: "method",
        component: () => import('@/views/mixin/method/index.vue')
    },
    // 局部混入
    {
        path: '/part',
        name: "part",
        component: () => import('@/views/mixin/part/index.vue')
    },
    // 全局混入
    {
        path: '/overall',
        name: "overall",
        component: () => import('@/views/mixin/overall/index.vue')
    },
]