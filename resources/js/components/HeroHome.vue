<template>
  <section class="relative">

    <!-- Dark background -->
    <div class="absolute inset-0 bg-slate-900 bg-blue-400 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-20 md:pt-40 md:pb-44">

        <!-- Hero content -->
        <div class="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

          <!-- Content -->
          <div class="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
            <h1 class="h1 font-playfair-display font-satoshi text-slate-100 mb-4">Hello There!</h1>
            <p class="text-xl text-slate-400 font-erode font-normal text-white mb-8">Is your online engagement, Engaging? Is that agency too busy to pick up the phone? Is your SEO not gaining traction? Your business deserves better</p>
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <router-link class="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" to="/request-demo">
                  ...Maybe <span class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </router-link>
              </div>
              <div>
                <router-link class="btn text-white bg-slate-700 hover:bg-slate-800 w-full" to="#0">Show me your stuff</router-link>
              </div>
            </div>
          </div>

<!--          &lt;!&ndash; Hero image &ndash;&gt;-->
<!--          <div data-aos="fade-left">-->
<!--            &lt;!&ndash; Image &ndash;&gt;-->
<!--            <div class="flex justify-center items-center">-->
<!--              <div class="relative">-->
<!--                <div class="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10" aria-hidden="true"></div>-->
<!--                <img class="mx-auto md:max-w-none" src="../../images/hero-image-01.jpg" width="540" height="405" alt="Hero" />-->
<!--              </div>-->
<!--              <button class="absolute group" @click.stop="videoModalOpen = true" aria-controls="modal">-->
<!--                <svg class="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <circle class="text-white opacity-80 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />-->
<!--                  <path class="text-blue-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />-->
<!--                </svg>-->
<!--              </button>-->
<!--            </div>-->

<!--            <Modal id="modal" ariaLabel="modal-headline" :modalOpen="videoModalOpen" @close-modal="videoModalOpen = false">-->
<!--              <iframe class="w-full aspect-video" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>-->
<!--            </Modal>-->
<!--          </div>-->

        <div>
            <div class="flex justify-center items-center">
<!--                <div class="relative">-->
<!--                    <img class="mx-auto md:max-w-none" src="../../images/acentic-cards.png" width="540" height="405" alt="Hero" />-->
<!--                </div>-->
                <div class="relative">
                    <img class="mx-auto md:max-w-none md:min-w-[50%] -translate-x-20 -y-12" src="../../images/acentic-cards.png" width="840" height="405" alt="Hero" />
                </div>
            </div>
        </div>

        </div>

      </div>
    </div>
  </section>
</template>

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
