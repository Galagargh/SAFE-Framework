<template>
  <section id="go-on" class="relative">

    <div class="absolute inset-0 bg-slate-100 bg-blue-400 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h2 class="h2 font-satoshi text-slate-800 text-white mb-4">You’re an Entrepreneur</h2>
          <p class="text-xl text-slate-500 text-white font-erode">You naturally wear many hats, but the thought of adding yet another string to your bow is taking away your attention from other more pressing issues in your business. Once you start digging, you soon learn marketing is a rabbit hole, requiring constant upkeep.</p>
        </div>

        <!-- Section content -->
        <div class="max-w-3xl mx-auto">

          <!-- Tabs buttons -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
            <button class="text-center transition-opacity" :class="tab === 1 || 'opacity-50 hover:opacity-75'" @click="tab = 1">
              <div class="inline-flex bg-white rounded-full shadow-md mb-3">
<!--                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path fill="#2174EA" d="M20 20h6v16h-6z" />-->
<!--                  <path fill-opacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />-->
<!--                </svg>-->
                  <svg class="m-4" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#2174EA" d="M368,96H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z"/>
                      <path fill-opacity=".65" fill="#2174EA" d="M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Z"/>
                      <path fill-opacity=".45" fill="#2174EA" d="M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z"/>
                  </svg>
              </div>
              <div class="md:text-lg leading-tight font-semibold text-slate-800 text-white">Website Design</div>
            </button>
            <button class="text-center transition-opacity" :class="tab === 2 || 'opacity-50 hover:opacity-75'" @click="tab = 2">
              <div class="inline-flex bg-white rounded-full shadow-md mb-3">
<!--                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path fill-opacity=".64" fill="#5091EE" d="M33 23v8h3V20H25v3z" />-->
<!--                  <path fill="#2174EA" d="M20 25h11v11H20z" />-->
<!--                </svg>-->
                  <svg class="m-4" width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#2174EA" d="M202.24,74C166.11,56.75,115.61,48.3,48,48h0a31.36,31.36,0,0,0-17.92,5.33A32,32,0,0,0,16,79.9V366c0,19.34,13.76,33.93,32,33.93,71.07,0,142.36,6.64,185.06,47a4.11,4.11,0,0,0,6.94-3V106.82a15.89,15.89,0,0,0-5.46-12A143,143,0,0,0,202.24,74Z"/>
                      <path fill="#2174EA" d="M481.92,53.3A31.33,31.33,0,0,0,464,48h0c-67.61.3-118.11,8.71-154.24,26a143.31,143.31,0,0,0-32.31,20.78,15.93,15.93,0,0,0-5.45,12V443.91a3.93,3.93,0,0,0,6.68,2.81c25.67-25.5,70.72-46.82,185.36-46.81a32,32,0,0,0,32-32v-288A32,32,0,0,0,481.92,53.3Z"/>
                  </svg>
              </div>
              <div class="md:text-lg leading-tight font-semibold text-slate-800 text-white">Print Design</div>
            </button>
            <button class="text-center transition-opacity" :class="tab === 3 || 'opacity-50 hover:opacity-75'" @click="tab = 3">
              <div class="inline-flex bg-white rounded-full shadow-md mb-3">
<!--                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path fill-opacity=".64" fill="#5091EE" d="M20 27l7-7h-7z" />-->
<!--                  <path fill="#2174EA" d="M29 20l7 7v-7z" />-->
<!--                  <path fill-opacity=".64" fill="#5091EE" d="M36 29l-7 7h7z" />-->
<!--                  <path fill="#2174EA" d="M27 36l-7-7v7z" />-->
<!--                </svg>-->
                  <svg class="m-4" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                      <path fill="#2174EA" fill-opacity=".75" d="M253.72,202.53a4,4,0,0,0,4.56,0,151.88,151.88,0,0,1,128.44-20.41,4,4,0,0,0,5.15-4C388.8,105.86,329,48,256,48S123.2,105.86,120.13,178.15a4,4,0,0,0,5.15,4,151.88,151.88,0,0,1,128.44,20.41Z"/>
                      <path fill="#2174EA" fill-opacity=".75" d="M405.31,212.56a152.53,152.53,0,0,1-83.08,108.23,4,4,0,0,0-2.28,3.69c0,1.17.05,2.34.05,3.52a151.58,151.58,0,0,1-47.15,109.94,4,4,0,0,0,.64,6.31A135.24,135.24,0,0,0,344,464c72.07,0,134.1-60.28,136-132.34a136.07,136.07,0,0,0-68.76-121.87A4,4,0,0,0,405.31,212.56Z"/>
                      <path fill="#2174EA" fill-opacity=".65" d="M390.57,203.67a4,4,0,0,0-2.69-4.4,135.84,135.84,0,0,0-114.4,12.49,4,4,0,0,0-.64,6.29,151.92,151.92,0,0,1,44.47,81.4,4,4,0,0,0,5.94,2.72A136.29,136.29,0,0,0,390.57,203.67Z"/>
                      <path fill="#2174EA" fill-opacity=".75" d="M192,328c0-1.18,0-2.35.05-3.52a4,4,0,0,0-2.28-3.69,152.53,152.53,0,0,1-83.08-108.23,4,4,0,0,0-5.88-2.77A136.07,136.07,0,0,0,32.05,331.66C34,403.72,96,464,168.05,464a135.24,135.24,0,0,0,70.46-19.75,4,4,0,0,0,.64-6.31A151.58,151.58,0,0,1,192,328Z"/>
                      <path fill="#2174EA" fill-opacity=".65" d="M168,192a135.34,135.34,0,0,0-43.88,7.27,4,4,0,0,0-2.69,4.4,136.29,136.29,0,0,0,67.32,98.5,4,4,0,0,0,5.94-2.72,151.92,151.92,0,0,1,44.47-81.4,4,4,0,0,0-.64-6.29A135.18,135.18,0,0,0,168,192Z"/>
                      <path fill="#2174EA" fill-opacity=".65" d="M256,336a151.44,151.44,0,0,1-42.72-6.12,4,4,0,0,0-5.15,4,135.69,135.69,0,0,0,45.18,95.4,4,4,0,0,0,5.38,0,135.69,135.69,0,0,0,45.18-95.4,4,4,0,0,0-5.15-4A151.44,151.44,0,0,1,256,336Z"/>
                      <path fill="#2174EA" fill-opacity=".45" d="M302.57,308.33a135.94,135.94,0,0,0-43.87-81.58,4.06,4.06,0,0,0-5.4,0,135.94,135.94,0,0,0-43.87,81.58,4,4,0,0,0,2.69,4.4,136.06,136.06,0,0,0,87.76,0A4,4,0,0,0,302.57,308.33Z"/>
                  </svg>
              </div>
              <div class="md:text-lg leading-tight font-semibold text-slate-800 text-white">Branding Packages</div>
            </button>
            <button class="text-center transition-opacity" :class="tab === 4 || 'opacity-50 hover:opacity-75'" @click="tab = 4">
              <div class="inline-flex bg-white rounded-full shadow-md mb-3">
<!--                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path d="M24 28h-4v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2v-5z" fill-opacity=".64" fill="#5091EE" />-->
<!--                  <path d="M35 21h-8c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H33c1.7 0 3-1.3 3-3V22c0-.6-.4-1-1-1z" fill="#2174EA" />-->
<!--                </svg>-->
                  <svg class="m-4" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                      <path fill="#2174EA" d="M456,128a40,40,0,0,0-37.23,54.6L334.6,266.77a39.86,39.86,0,0,0-29.2,0L245.23,206.6a40,40,0,1,0-74.46,0L70.6,306.77A40,40,0,1,0,93.23,329.4L193.4,229.23a39.86,39.86,0,0,0,29.2,0l60.17,60.17a40,40,0,1,0,74.46,0l84.17-84.17A40,40,0,1,0,456,128Z"/>
                  </svg>
              </div>
              <div class="md:text-lg leading-tight font-semibold text-slate-800 text-white">SEO Campaigns</div>
            </button>
          </div>

          <!-- Tab items -->
          <div class="relative flex flex-col" data-aos="fade-up">
            <transition
              enter-active-class="transition ease-in-out duration-700 order-first"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in-out duration-300 absolute"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 1">
                <img class="mx-auto shadow-2xl" src="../../images/features-home-01.jpg" width="768" height="474" alt="Features home 01" />
              </div>
            </transition>
            <transition
              enter-active-class="transition ease-in-out duration-700 order-first"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in-out duration-300 absolute"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 2">
                <img class="mx-auto shadow-2xl" src="../../images/features-home-02.jpg" width="768" height="474" alt="Features home 02" />
              </div>
            </transition>
            <transition
              enter-active-class="transition ease-in-out duration-700 order-first"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in-out duration-300 absolute"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 3">
                <img class="mx-auto shadow-2xl" src="../../images/features-home-03.jpg" width="768" height="474" alt="Features home 03" />
              </div>
            </transition>
            <transition
              enter-active-class="transition ease-in-out duration-700 order-first"
              enter-from-class="opacity-0 -translate-y-16"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in-out duration-300 absolute"
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-16"
            >
              <div class="w-full" v-show="tab === 4">
                <img class="mx-auto shadow-2xl" src="../../images/features-home-04.jpg" width="768" height="474" alt="Features home 04" />
              </div>
            </transition>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FeaturesHome',
  setup() {

    const tab = ref(1)

    return {
      tab,
    }
  }
}
</script>
