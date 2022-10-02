<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header mode="light" />

    <!-- Page content -->
    <main class="grow border-b border-slate-200">

      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div class="max-w-3xl mx-auto text-center">
            <!-- 404 content -->
            <div class="relative inline-flex">
              <div class="absolute left-full -mt-4 fill-slate-300 hidden lg:block" aria-hidden="true">
                <svg class="fill-slate-300" width="56" height="43">
                  <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
                </svg>
              </div>
              <h1 class="h1 font-playfair-display text-slate-800 mb-4">Oops!</h1>
            </div>
            <p class="text-xl text-slate-500">We couldn't find the page you're looking for.</p>
            <div class="mt-8">
              <a class="btn text-white bg-blue-600 hover:bg-blue-700" href="index.html">Back Home</a>
            </div>
          </div>
        </div>
      </div>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'PageNotFound',
  components: {
    Header,
    Footer,
  },
}
</script>
