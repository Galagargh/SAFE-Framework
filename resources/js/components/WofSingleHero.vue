<template>
  <section class="relative">

    <!-- Dark background -->
    <div class="absolute inset-0 pointer-events-none -z-10" :class="sectionColour" aria-hidden="true">
      <div class="w-full h-full" data-aos="fade">
          <slot name="img"/>
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-28 md:pt-40 md:pb-36">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center">
          <div class="text-center">
            <router-link class="inline-flex font-semibold text-slate-100 hover:text-slate-200 transition duration-150 ease-in-out group mb-2" to="/work" data-aos="fade-down"><span class="tracking-normal text-slate-100 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&lt;-</span> Back to Projects</router-link>

            <h1 class="h2 font-satoshi text-slate-100 mb-4">
                <a class="text-slate-100 hover:decoration-blue-200" :class="{ 'hover:underline' : projectLink }" :href="projectLink">{{ projectTitle }}</a>
            </h1>
          </div>
          <div class="text-slate-100" data-aos="fade-up">Project Date <span class="text-slate-600">·</span>{{ projectDate }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WofSingleHero',
    props: {
        projectTitle: String,
        projectLink: String,
        projectDate: String,
        projectImage: String,
        sectionColour: String
    },
}
</script>
