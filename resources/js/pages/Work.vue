<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <WofHero />
<!--      <Trust />-->
      <Projects />
      <Testimonials />
      <CtaDark />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import WofHero from '../components/WofHero.vue'
import Trust from '../components/Trust.vue'
import Projects from '../components/Projects.vue'
import Testimonials from '../components/Testimonials.vue'
import CtaDark from '../components/CtaDark.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Work',
  components: {
    Header,
    WofHero,
    Trust,
    Projects,
    Testimonials,
    CtaDark,
    Footer,
},
}
</script>
