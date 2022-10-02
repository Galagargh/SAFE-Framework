<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroHome />
      <FeaturesBlocks />
      <FeaturesHome />
      <FeaturesHome02 />
      <FeaturesHome03 />
      <Target />
      <PricingSection />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HeroHome from '../components/HeroHome.vue'
import FeaturesBlocks from '../components/FeaturesBlocks.vue'
import FeaturesHome from '../components/FeaturesHome.vue'
import FeaturesHome02 from '../components/FeaturesHome02.vue'
import FeaturesHome03 from '../components/FeaturesHome03.vue'
import Target from '../components/Target.vue'
import PricingSection from '../components/PricingSection.vue'
import Cta from '../components/Cta.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeroHome,
    FeaturesBlocks,
    FeaturesHome,
    FeaturesHome02,
    FeaturesHome03,
    Target,
    PricingSection,
    Cta,
    Footer,
},
}
</script>
