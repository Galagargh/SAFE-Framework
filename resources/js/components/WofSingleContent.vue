<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:pt-20 md:pb-16">

        <div class="max-w-3xl mx-auto">
          <div class="text-lg text-slate-500">
            <h2 class="h3 font-satoshi text-slate-800 mb-4">{{ sectionOneHead }}</h2>
            <p class="font-erode mb-8">
                {{ sectionOneContent }}
            </p>
            <div class="flex justify-center mb-8" aria-hidden="true">
              <svg class="fill-slate-400" width="36" height="4">
                <circle cx="18" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="34" cy="2" r="2" />
              </svg>
            </div>
              <figure class="mb-8">
                  <img class="w-full" src="../../images/wof-single.jpg" width="768" height="432" alt="Wall of Love single" />
              </figure>

              <h2 class="h3 font-satoshi text-slate-800 mb-4" :class="sectionColour">{{ sectionTwoHead }}</h2>
              <p class="mb-8 font-erode">
                  {{ sectionTwoContent }}
              </p>

              <h2 class="h3 font-satoshi text-slate-800 mb-4" :class="sectionColour">{{ sectionThreeHead }}</h2>
              <p class="mb-8 font-erode">
                  {{ sectionThreeContent }}
              </p>

              <h2 class="h3 font-satoshi text-slate-800 mb-4" :class="sectionColour">{{ sectionFourHead }}</h2>
              <p class="mb-8 font-erode">
                  {{ sectionFourContent }}
              </p>

            <h3 class="flex h4 font-erode italic text-slate-800 mb-4 lg:-ml-10">
              <div class="mr-5 mt-2">
                <svg class="fill-blue-600 shrink-0" width="20" height="16" viewBox="0 0 20 16">
                  <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                </svg>
              </div>
              <span>{{ blockquoteHead }}</span>
            </h3>
            <p class="mb-8 font-erode">
                {{ blockquoteContent }}
            </p>

            <div class="flex justify-center mb-8" aria-hidden="true">
              <svg class="fill-slate-400" width="36" height="4">
                <circle cx="18" cy="2" r="2" />
                <circle cx="2" cy="2" r="2" />
                <circle cx="34" cy="2" r="2" />
              </svg>
            </div>
            <h2 class="h3 font-satoshi text-slate-800 mb-4" :class="sectionColour">{{ sectionFiveHead }}</h2>
            <p class="mb-8 font-erode">
                {{ sectionFiveContent }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WofSingleContent',
    props: {
      sectionColour: String,
      sectionOneHead: String,
      sectionOneContent: String,
      sectionTwoHead: String,
      sectionTwoContent: String,
      sectionThreeHead: String,
      sectionThreeContent: String,
      sectionFourHead: String,
      sectionFourContent: String,
      sectionFiveHead: String,
      sectionFiveContent: String,
      blockquoteHead: String,
      blockquoteContent: String
    }
}
</script>
