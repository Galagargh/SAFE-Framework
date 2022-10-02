<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <AboutHero />
      <Stats02 />
      <AboutContent />
      <Team />
      <TeamMembers />
      <Clients02 />
      <Cta02 />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import AboutHero from '../components/AboutHero.vue'
import Stats02 from '../components/Stats02.vue'
import AboutContent from '../components/AboutContent.vue'
import Team from '../components/Team.vue'
import TeamMembers from '../components/TeamMembers.vue'
import Clients02 from '../components/Clients02.vue'
import Cta02 from '../components/Cta02.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    AboutHero,
    Stats02,
    AboutContent,
    Team,
    TeamMembers,
    Clients02,
    Cta02,
    Footer,
  },
}
</script>
