import slot from './slot'
import mixin from './mixin'
import keepAlive from './keepAlive'

const init = [
    // 首页
    {
        path: '/home',
        name: "home",
        component: () => import('@/components/home/index.vue')
    },
    {
        path: '/',
        redirect: '/home'
    }
]


export default init.concat(slot, mixin, keepAlive)