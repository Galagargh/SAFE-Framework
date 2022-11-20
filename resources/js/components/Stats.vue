<template>
  <section class="-mt-16">

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="max-w-3xl mx-auto">

        <div class="bg-white py-3 sm:py-6 shadow-xl">
          <ul class="flex">
            <li class="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-slate-300 after:hidden sm:after:block last:after:hidden">
              <div class="text-4xl md:text-5xl font-erode font-bold mb-1" :class="sectionColour">{{ valueOne }}</div>
              <div class="text-xs sm:text-sm md:text-base text-slate-500 font-medium">{{ pointOne }}</div>
            </li>
            <li class="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-slate-300 after:hidden sm:after:block last:after:hidden">
              <div class="text-4xl md:text-5xl font-erode font-bold mb-1" :class="sectionColour">{{ valueTwo }}</div>
              <div class="text-xs sm:text-sm md:text-base text-slate-500 font-medium">{{ pointTwo }}</div>
            </li>
            <li class="relative w-1/3 px-1 text-center after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-px after:w-0.5 after:h-16 after:bg-slate-300 after:hidden sm:after:block last:after:hidden">
              <div class="text-4xl md:text-5xl font-erode font-bold mb-1" :class="sectionColour">{{ valueThree }}</div>
              <div class="text-xs sm:text-sm md:text-base text-slate-500 font-medium">{{ pointThree }}</div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats',
    props: {
      sectionColour: String,
      pointOne: String,
      pointTwo: String,
      pointThree: String,
      valueOne: String,
      valueTwo: String,
      valueThree: String
    },
}
</script>
