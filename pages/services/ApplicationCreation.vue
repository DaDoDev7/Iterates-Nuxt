<template>
    <div>
        <!-- Page Title -->
        <section class="page-title p_relative centred">
            <div class="auto-container">
                <div class="content-box">
                    <h1 class="d_block fs_60 lh_70 fw_bold mb_10">{{ $t('globalTrans.application') }}</h1>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <!-- service-details -->
        <section class="service-details service-details-1 p_relative sec-pad">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div class="service-details-content">
                            <div data-animation-box class="content-one p_relative d_block mb_55">
                                <figure data-animation-text
                                    class="overlay-anim-black-bg image p_relative d_block b_radius_10 mb_60"
                                    data-animation="overlay-animation"><img src="~/assets/images/service/4.png" alt="">
                                </figure>
                                <div class="text">

                                    <p class="font_family_poppins mb_25">

                                        {{ $t('globalTrans.application_details') }}
                                    </p>
                                    <p class="font_family_poppins mb_25">
                                        {{ $t('globalTrans.application_detais_text') }}
                                    </p>
                                    <p class="font_family_poppins mb_25">

                                        {{ $t('globalTrans.application_details_text_one') }}
                                    </p>
                                </div>
                            </div>
                            <div class="content-two p_relative d_block mb_55">
                                <h3 class="d_block fs_30 lh_40 fw_sbold mb_25">{{ $t('globalTrans.you_need') }}</h3>
                                <p class="font_family_poppins mb_25">{{ $t('globalTrans.application_why') }}

                                </p>
                                <ul class="list clearfix">
                                            <li
                                                class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                                {{ $t('globalTrans.cross_development') }}
                                            </li>
                                            <li
                                                class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                                {{ $t('globalTrans.user_focused') }}
                                            </li>
                                            <li
                                                class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                                {{ $t('globalTrans.custom_modern_design') }}
                                            </li>
                                            <li
                                                class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                                {{ $t('globalTrans.geolocalisation') }}
                                            </li>
                                            <li
                                            class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                            {{ $t('globalTrans.notification') }}
                                            </li>
                                            <li
                                                class="p_relative pl_30 d_block fs_16 font_family_inter fw_medium color_black mb_9 pull-left">
                                                {{ $t('globalTrans.scalable_applications') }}
                                            </li>
                            </ul>
                            </div>
                            <div data-animation-box class="two-column p_relative d_block mb_60">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure data-animation-text
                                            class="overlay-anim-black-bg image p_relative d_block b_radius_10"
                                            data-animation="overlay-animation"><img
                                                src="~/assets/images/service/applicationcreation1.png" alt=""></figure>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure data-animation-text
                                            class="overlay-anim-black-bg image p_relative d_block b_radius_10"
                                            data-animation="overlay-animation"><img
                                                src="~/assets/images/service/applicationcreation2.png" alt=""></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div class="service-sidebar p_relative d_block ml_30">
                            <ServicesDetailsRightBar />
                            <FreeQuote />
                            <ServiceContactWidget />

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service-details -->
    </div>
</template>
<script setup>
// 😁🤖🤖🤖🤖🤖 🦄🦄// SEO META🦄🦄  🤖🤖🤖🤖🤖😁

useSeoMeta({
  title: 'iterates agency',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// 😁🤖🤖🤖🤖🤖 🦄🦄// SEO META🦄🦄  🤖🤖🤖🤖🤖😁


</script>
<style>
.page-title {
    padding: 150px 0 0px;
}

.page-title:before {
    background: white;
}

.page-title .content-box h1 {
    color: #000;
}
p{
    text-align: justify;
}
</style>