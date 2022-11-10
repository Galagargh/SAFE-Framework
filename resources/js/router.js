import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import Pricing from './pages/Pricing.vue'
import About from './pages/About.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import Work from './pages/Work.vue';
import WallOfLoveSingle from './pages/WallOfLoveSingle.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Support from './pages/Support.vue'
import SignIn from './pages/SignIn.vue'
import ResetPassword from './pages/ResetPassword.vue'
import RequestDemo from './pages/RequestDemo.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    scrollBehavior(to) {
        if (to.hash) {
            window.scroll({ top: 0 })
        } else {
            document.querySelector('html').style.scrollBehavior = 'auto'
            window.scroll({ top: 0 })
            document.querySelector('html').style.scrollBehavior = ''
        }
    },
    history: routerHistory,
    linkExactActiveClass: 'route-is-active',

    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/pricing',
            component: Pricing
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/blog-post',
            component: BlogPost
        },
        {
            path: '/work',
            component: Work
        },
        {
            path: '/wall-of-love-single',
            component: WallOfLoveSingle
        },
        {
            path: '/support',
            component: Support
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/reset-password',
            component: ResetPassword
        },
        {
            path: '/request-demo',
            component: RequestDemo
        },
        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound
        }
    ]
});

export default router;
