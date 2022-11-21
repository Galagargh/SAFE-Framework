<template>
    <div className="flex flex-col min-h-screen overflow-hidden">

        <!-- Site header -->
        <Header />

        <!-- Page content -->
        <main class="grow">
            <!-- Page sections -->
            <WofSingleHero project-title="Pigotts Investments" project-link="https://www.pigottsinvestments.co.uk/" project-date="March 3, 2019" project-image="../../images/wof-single.jpg" section-colour="bg-red-500">
                <template #img>
                    <img class="opacity-10 w-full h-full object-cover" src="../../../images/PigottsInvestments2.jpg" width="1440" height="497" alt="Hero" />
                </template>
            </WofSingleHero>
            <Stats section-colour="text-red-500" point-one="More Backlink Visits" value-one="12%" point-two="More Unique Visitors" value-two="30%" point-three="Bounce Rate" value-three="-84%"/>
            <WofSingleContent section-colour="text-red-500"
                              section-one-head=""
                              section-one-content="As long running financial managers, Piggott's investments are an established firm with an already loyal customer base. Being an existing client of Goldmine Media, they reached out as part of their strategy to update their branding by making their website more modern, this was tasked to myself. As well as this, additional features were to be added to the site based on new client specifications and requirements."
                              section-two-head="The Brief"
                              section-two-content="The rebranding of the site was to reflect their already existing client base, clients of various ages concerned about protecting  their wealth for themselves and their future lineage. The wealth of information already present on their site was updated to provide a more engaging experience for the viewer so they could be informed whilst entrusting their important financial investment decisions to Pigotts Investments."
                              section-three-head="Client Area"
                              section-three-content="As part of the request from the client (Pigotts), the new website was to feature a client portal which the clients could then use to gain access to any new documents. This would include documents Pigotts had sent clients regarding their investments, with the ability to also send updated TOS documents to all client areas at the same time if necessary. This was to be easily maintained and updated within the back-end. The chosen solution for this was WP Customer Area, using this in combination with additional add-ons for it allowed for the specifications the client required within a fast turnaround time."
                              section-four-head=""
                              section-four-content=""
                              section-five-head="Result"
                              section-five-content="Since the site redesign, customers noted being very impressed with the ease of finding information. Unique site visits also increased substantially."
                              blockquote-head="Client First"
                              blockquote-content="Developed for an already existing client-base at Pigotts request, It was seen as an ”Upgrade” for the existing clients by providing them with a new service as part of their already existing fees they pay towards managing their finances."
            >
                <template #img>
                    <img class="w-full" src="../../../images/PigottsInvestments1.jpg" width="768" height="432" alt="Wall of Love single" />
                </template>
            </WofSingleContent>
            <!--            <RelatedStories />-->
        </main>

        <!-- Site footer -->
        <Footer />

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
    name: 'pigotts',
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
