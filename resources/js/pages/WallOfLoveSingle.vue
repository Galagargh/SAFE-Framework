<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <WofSingleHero />
      <Stats />
      <WofSingleContent />
      <RelatedStories />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import WofSingleHero from '../components/WofSingleHero.vue'
import Stats from '../components/Stats.vue'
import WofSingleContent from '../components/WofSingleContent.vue'
import RelatedStories from '../components/RelatedStories.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'WallOfLoveSingle',
  components: {
    Header,
    WofSingleHero,
    Stats,
    WofSingleContent,
    RelatedStories,
    Footer,
},
}
</script>
