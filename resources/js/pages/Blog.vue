<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <BlogHero />
      <BlogTags />
      <BlogList />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import BlogHero from '../components/BlogHero.vue'
import BlogTags from '../components/BlogTags.vue'
import BlogList from '../components/BlogList.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    BlogHero,
    BlogTags,
    BlogList,
    Footer,
  },
}
</script>
