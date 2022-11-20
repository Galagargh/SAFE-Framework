<template>
    <div className="flex flex-col min-h-screen overflow-hidden">

        <!-- Site header -->
        <Header />

        <!-- Page content -->
        <main class="grow">
            <!-- Page sections -->
            <WofSingleHero project-title="Arkenstone Wealth Management" project-date="Sep 24, 2019" project-image="../../images/wof-single.jpg" section-colour="bg-blue-500" />
            <Stats point-one="More Referrals" value-one="48%" point-two="More Daily Traffic" value-two="70%" point-three="Click-Through Rate" value-three="128%"/>
            <WofSingleContent section-colour="text-blue-500"
                              section-one-head=""
                              section-one-content="Among one of the first projects I had worked on whilst at Goldmine Media was Arkenstone Wealth. Requesting a full-scope brand overhaul which would involve several stages, starting first with initial logo design and ending with full branding package and client facing site. The company themselves are an Independent Financial Advisor with a name derives from a fictional stone of great wealth in the well-known book The Hobbit. The initial concept was to design a logo based around this fictional stone, and attach it to the brand identity."
                              section-two-head="The Brief"
                              section-two-content="The initial concept was to design a logo based around this fictional stone, and attach it to the brand identity. The Arkenstone itself is meant to serve as a symbol for prosperity and wealth passed down within the family. It also serves a call to adventure for Bilbo when starting his journey towards the Misty Mountain. It was decided at the outset that the new digital branding bundle would encompass the message of Wealth Inheritance/Safety, with a sense of adventure and be communicated through each outlet of the marketing message for Arkenstone. As adventure is a theme which also appeals to a millennial age group this worked two-fold, as this was a sought after market for the company."
                              section-three-head=""
                              section-three-content="With the branding in place and after client approval work had began to start on other aspects of their marketing package beginning with their website. It was important that the site be easy to use for their older clients but still have a modern and fresh approach in order to engage a younger audience. Modern web approaches were taken, for the back-end and front- end. The website was built using the newer standards such as flex and grid. And parallax was used to display the cover images at the top of each page with a tagline approach. The site was built with multiple devices in mind, this was important for the client as the majority of their clients were usually on the go and so wanted a meaningful way to interact with them This digital aspect would cover the prospective clients, we would then"
                              section-four-head="Stationary"
                              section-four-content="We would then go on to produce printed collateral to ring-fence any existing clients. This would include the necessities such as letterheads and business cards and go on to include in-depth guides to the unique aspects of their companies process. Any guides with graphics were in-keeping with the travel focused theme and have since enabled the company to reach their previously untapped market gap of millennials. Alongside this newsletters were also produced for the clients existing customer base to inform them of updated financial market information and keep them informed. These were also designed with the millennial market in mind."
                              section-five-head="Result"
                              section-five-content="Since the branding overhaul, Google Analytics information from site visitors had revealed that the engagement of the 21-35 age range has significantly increased and had started to reach out for referrals. Since the site redesign, site traffic among all age ranges had increased dramatically also. With the viewing time of each visitor significantly increased. The approach taken for a modern look with a classic tale was a success."
                              blockquote-head="Responsive Content"
                              blockquote-content="It was important the site was viewable from mobile devices as this was the main traffic the website was receiving currently. It was developed in mind for a wide range of devices, with fallback implementations in place. In support of older devices."
            />
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
    name: 'arkenstone',
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
