<template>
  <header class="absolute w-full z-30" :class="{ 'dark': mode !== 'light' }">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block text-blue-600 transition duration-150 ease-in-out" to="/" aria-label="Cruip">
              <svg id="mg-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293.72 81">
                  <path class="cls-1" d="M37.93,76.22H14.74C7.66,76.22,2.93,69.87,4.18,62L11.05,19c1.25-7.82,8-14.17,15.08-14.17H49.32c7.08,0,11.81,6.35,10.56,14.17L53,62C51.76,69.87,45,76.22,37.93,76.22Z"/>
                  <path class="cls-1" d="M90.55,76.22H73.89c-7.82,0-13-6.35-11.67-14.18L69.82,19C71.2,11.13,78.66,4.78,86.49,4.78h16.65c7.83,0,13.06,6.35,11.68,14.17L107.22,62C105.84,69.87,98.38,76.22,90.55,76.22Z"/>
                  <path class="cls-1" d="M151.87,76.22h-23.2c-7.07,0-11.8-6.35-10.55-14.18L125,19c1.25-7.82,8-14.17,15.07-14.17h23.2c7.08,0,11.81,6.35,10.56,14.17L167,62C165.7,69.87,159,76.22,151.87,76.22Z"/>
                  <path class="cls-1" d="M289.68,17a16.29,16.29,0,0,1-5.78,10.54,16,16,0,0,1-10.25,4H229.39a7,7,0,0,0-6.65,5.65L218.3,62.33c-1.38,7.82-8.84,14.17-16.67,14.17H188.8c-7.83,0-13.06-6.35-11.68-14.17l7.7-43.66c0-.11,0-.23.07-.34,1.53-7.67,8.89-13.83,16.61-13.83h76.55C285.19,4.5,290.41,9.88,289.68,17Z"/>
                  <path class="cls-1" d="M246.77,40.5h25.3c7.45,0,12.43,6,11.12,13.5l-1.59,9c-1.31,7.45-8.42,13.5-15.88,13.5h-25.3c-7.45,0-12.43-6-11.12-13.5l1.59-9C232.2,46.54,239.31,40.5,246.77,40.5Z"/>
              </svg>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop menu links -->
          <ul class="flex grow justify-start flex-wrap items-center">
              <li>
                  <router-link to="/work" class="font-medium text-slate-800 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Case Studies</router-link>
              </li>
<!--            <li>-->
<!--              <router-link to="/pricing" class="font-medium text-slate-800 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link to="/about" class="font-medium text-slate-800 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link to="/blog" class="font-medium text-slate-800 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</router-link>-->
<!--            </li>-->
            <!-- 1st level: hover -->
<!--            <Dropdown title="Resources">-->
<!--              <li>-->
<!--                <router-link to="/404" class="font-medium text-sm text-slate-600 hover:text-blue-600 flex py-2 px-5 leading-tight">404</router-link>-->
<!--              </li>-->
<!--              <li>-->
<!--                <router-link to="/support" class="font-medium text-sm text-slate-600 hover:text-blue-600 flex py-2 px-5 leading-tight">Support center</router-link>-->
<!--              </li>-->
<!--            </Dropdown>-->
          </ul>

          <!-- Desktop sign in links -->
<!--          <ul class="flex grow justify-end flex-wrap items-center">-->
<!--            <li>-->
<!--              <router-link to="/signin" class="font-medium text-slate-800 hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Sign in</router-link>-->
<!--            </li>-->
<!--            <li>-->
<!--              <router-link to="/request-demo" class="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group">Request Demo <span class="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></router-link>-->
<!--            </li>-->
<!--          </ul>-->

        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-slate-900 dark:text-slate-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll no-scrollbar bg-white"
            >
              <ul class="px-5 py-2">
              <li>
                  <router-link to="/work" class="flex font-medium text-slate-800 hover:text-blue-600 py-2">Work</router-link>
              </li>
                  <!--
               <li>
                  <router-link to="/pricing" class="flex font-medium text-slate-800 hover:text-blue-600 py-2">Pricing</router-link>
                </li>
                <li>
                  <router-link to="/about" class="flex font-medium text-slate-800 hover:text-blue-600 py-2">About</router-link>
                </li>
                <li>
                  <router-link to="/blog" class="flex font-medium text-slate-800 hover:text-blue-600 py-2">Blog</router-link>
                </li>
                <li class="py-2 my-2 border-t border-b border-slate-200">
                  <span class="flex font-medium text-slate-800 hover:text-blue-600 py-2">Resources</span>
                  <ul class="pl-4">
                    <li>
                      <router-link to="/404" class="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2">404</router-link>
                    </li>
                    <li>
                      <router-link to="/support" class="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2">Support</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/signin" class="flex font-medium w-full text-slate-800 hover:text-blue-600 py-2">Sign in</router-link>
                </li>
                <li>
                  <router-link to="/request-demo" class="flex font-medium text-blue-600 py-2 group">Request Demo <span class="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></router-link>
                </li>
                -->
              </ul>
            </nav>
          </transition>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Dropdown from './../utils/Dropdown.vue'

export default {
  name: 'Header',
  props: ['mode'],
  components: {
    Dropdown,
  },
  setup() {

    const mobileNavOpen = ref(false)
    const mobileNav = ref(null)
    const hamburger = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.value || mobileNav.value.contains(target) || hamburger.value.contains(target)) return
      mobileNavOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen.value || keyCode !== 27) return
      mobileNavOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      mobileNavOpen,
      mobileNav,
      hamburger,
    }
  }
}
</script>
