<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <PricingHero />
      <PricingCta />
      <PricingFeatures />
      <FeaturesTable />
      <Faqs />
      <CtaDark />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import PricingHero from '../components/PricingHero.vue'
import PricingCta from '../components/PricingCta.vue'
import PricingFeatures from '../components/PricingFeatures.vue'
import FeaturesTable from '../components/FeaturesTable.vue'
import Faqs from '../components/Faqs.vue'
import CtaDark from '../components/CtaDark.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Pricing',
  components: {
    Header,
    PricingHero,
    PricingCta,
    PricingFeatures,
    FeaturesTable,
    Faqs,
    CtaDark,
    Footer,
  },
}
</script>
