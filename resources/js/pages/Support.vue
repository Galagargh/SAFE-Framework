<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <SupportHero />
      <SupportContent />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SupportHero from '../components/SupportHero.vue'
import SupportContent from '../components/SupportContent.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Support',
  components: {
    Header,
    SupportHero,
    SupportContent,
    Footer,
  },
}
</script>
