<template>
    <div className="flex flex-col min-h-screen overflow-hidden">

        <!-- Site header -->
        <Header/>

        <!-- Page content -->
        <main className="grow">
            <!-- Page sections -->
            <WofSingleHero project-title="Alexandra Louise Jewellery" project-date="March 3, 2019"
                           project-image="../../images/wof-single.jpg" section-colour="bg-orange-400">
                <template #img>
                    <img class="opacity-10 w-full h-full object-cover" src="../../../images/alex-hero.jpg" width="1440" height="497" alt="Hero" />
                </template>
            </WofSingleHero>
            <Stats section-colour="text-orange-500" point-one="More Referrals" value-one="48%"
                   point-two="More Daily Traffic" value-two="70%" point-three="Click-Through Rate" value-three="128%"/>
            <WofSingleContent section-colour="text-orange-500"
                              section-one-head=""
                              section-one-content="A Jeweller based in Milton Keynes, Alexandra Louise was looking for a revitalised Brand Design for her upcoming exhibition in Milton Keynes Gallery. As part of a branding package I provided her with a logo for any future exhibitions and her business. Business card designs to hand out at her exhibition and for new clients. A poster for use around the exhibition, and social media assets to use for online marketing which were used to promote herself and her brand."
                              section-two-head=""
                              section-two-content="The Jewellery collection the client had used was designed around the organic nature of chrysalis and was named emergence. Inspired by the collection, the designs were based around the jewellery pieces, pods and organic matter the Jeweller loved including a silhouette of the new logo. The social media assets used for promoting the event helped in increasing the visibility of Alexandra's brand and the attendance for the exhibition."
                              section-three-head=""
                              section-three-content=""
                              section-four-head=""
                              section-four-content=""
                              section-five-head="Result"
                              section-five-content="Since launching her new Marketing Campaign she has received many offers for work. Alexandra was also so happy with the project that a second project is in process for designing new packaging to ship the orders of her work."
                              blockquote-head="The Client"
                              blockquote-content="A Designer-Maker of Contemporary Art Jewellery recently graduated from the University for the Creative Arts Rochester. Alexandra’s Chrysalis Collection takes inspiration from the chrysalis of butterflies. She combines the use of both precious metal and natural elements to capture the subtle textures, forms and colours of chrysalides."
            />
            <!--            <RelatedStories />-->
        </main>

        <!-- Site footer -->
        <Footer/>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import WofSingleHero from '../../components/WofSingleHero.vue'
import Stats from '../../components/Stats.vue'
import WofSingleContent from '../../components/WofSingleContent.vue'
import RelatedStories from '../../components/RelatedStories.vue'
import Footer from '../../components/Footer.vue'

export default {
    name: 'jewellery',
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
