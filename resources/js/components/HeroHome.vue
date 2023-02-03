<script setup>
    // import @tailwind utilities;
</script>

<template>
  <section class="relative">

    <!-- Dark background -->
    <div class="absolute inset-0 bg-blue-400 md:bg-[url('/home-hero.png')] hero-bg-position bg-right-bottom bg-no-repeat pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true" ></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-20 md:pt-40 md:pb-28">

        <!-- Hero content -->
        <div class="max-w-xl mx-auto md:max-w-none md:flex md:items-center space-x-8 -space-y-16">

<!--            md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0-->

          <!-- Content -->
          <div class="text-center md:w-[30rem] md:text-left" data-aos="fade-right">
            <h1 class="h1 font-satoshi dynamic-hero-text font-black text-slate-100 mb-4">Performant, Optimised,<br> <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-400">Eye-Catching</span></h1>
            <p class="text-xl text-slate-400 font-erode font-normal text-white mb-8">Is your online engagement, Engaging? Is that agency too busy to pick up the phone? Is your SEO not gaining traction? Your business deserves better</p>
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <a class="btn text-white font-satoshi bg-blue-600 hover:bg-blue-700 w-full group" href="#go-on">
                  ...Tell Me More <span class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <router-link class="btn text-white font-satoshi bg-slate-700 hover:bg-slate-800 w-full" to="/work">Show me your stuff</router-link>
              </div>
            </div>
          </div>

        <div data-aos="fade-left">
            <div class="flex justify-center items-center">
<!--                <div class="relative">-->
<!--                    <img class="mx-auto md:max-w-none" src="../../images/acentic-cards.png" width="540" height="405" alt="Hero" />-->
<!--                </div>-->
                <div class="relative">
                    <div class="w-full">
                        <img class="mx-auto
                        translate-y-[4.75em]
                        overflow-hidden
                        md:hidden
                        [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]
                        " src="../../images/home-hero.png" width="1040" height="405" alt="Hero" />
                    </div>
                </div>
            </div>
        </div>

        </div>

      </div>
    </div>
<!--    <div class="relative-->
<!--    mx-auto-->
<!--    h-20-->
<!--    bg-red-500-->
<!--    translate-y-[-4rem]-->
<!--    before:content-['']-->
<!--    [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_100%_100%)]-->
<!--     z-50"></div>-->

  </section>
</template>

<!--[clip-path:polygon(0_0,_0_100%,_100%_81%,_100%_0)]-->


<script>
import { ref } from 'vue'

import Modal from './../utils/Modal.vue'

export default {
  name: 'HeroHome',
  components: {
    Modal,
  },
  setup() {

    const videoModalOpen = ref(false)

    return {
      videoModalOpen,
    }
  }
}
</script>
