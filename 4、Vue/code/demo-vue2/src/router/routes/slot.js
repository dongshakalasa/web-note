export default [
    // 基本插槽使用
    {
        path: '/basic',
        name: "basic",
        component: () => import('@/views/slot/basic/index.vue')
    },
    // 
    {
        path: '/sign',
        name: "sign",
        component: () => import('@/views/slot/sign/index.vue')
    },
    {
        path: '/default',
        name: "default",
        component: () => import('@/views/slot/default/index.vue')
    },
    {
        path: '/scope',
        name: "scope",
        component: () => import('@/views/slot/scope/index.vue')
    },
]