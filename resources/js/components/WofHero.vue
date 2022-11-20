<template>
  <section class="relative">

    <!-- Dark background -->
    <div class="absolute inset-0 bg-green-500 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 md:pt-40">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-16">
          <h1 class="h1 font-satoshi text-slate-100 mb-4">Join our happy clients</h1>
          <p class="text-xl text-slate-100">We're proud to have played a part in these amazing journeys.</p>
        </div>

        <!-- Hero image -->
        <div class="max-w-3xl mx-auto" data-aos="fade-up">
          <div class="relative flex justify-center items-center">
            <img class="mx-auto" src="../../images/work-hero.jpg" width="768" height="432" alt="Wof hero" />
          </div>

          <Modal id="modal" ariaLabel="modal-headline" :modalOpen="videoModalOpen" @close-modal="videoModalOpen = false">
            <iframe class="w-full aspect-video" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
          </Modal>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

import Modal from './../utils/Modal.vue'

export default {
  name: 'WofHero',
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
