<template>
    <section class="relative">
        <div class="absolute inset-0 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

        <div class="relative max-w-3xl mx-auto text-center pb-12 px-4 sm:px-6">
            <h2 class="h2 mb-4 text-slate-800">"It's not worked in the past"</h2>
            <p class="font-erode text-slate-800 text-xl">Agencies sold you a dream and failed to deliver. You tried arranging meetings and phone-calls and were put on hold, and when you finally met you were underwhelmed with results. You only want someone who is as enthusiastic about your brand as you are.</p>
        </div>

    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'ServiceIntro',
    setup() {
        const tab = ref(1)

        return{
            tab,
        }
    }
}
</script>
