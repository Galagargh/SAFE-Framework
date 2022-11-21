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
import Arkenstone from './pages/case-studies/arkenstone.vue';
import Pigotts from './pages/case-studies/pigotts.vue';
import Jewellery from './pages/case-studies/jewellery.vue';

const routerHistory = createWebHistory();

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
            name: 'Home',
            component: Home
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: Pricing
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/blog-post',
            name: 'BlogPost',
            component: BlogPost
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/case-study/arkenstone',
            name: 'Arkenstone',
            component: Arkenstone
        },
        {
            path: '/case-study/pigotts',
            name: 'Pigotts',
            component: Pigotts
        },
        {
            path: '/case-study/jewellery',
            name: 'Jewellery',
            component: Jewellery
        },
        {
            path: '/support',
            name: 'Support',
            component: Support
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/request-demo',
            name: 'RequestDemo',
            component: RequestDemo
        },
        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound
        }
    ]
});

export default router;
