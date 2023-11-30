<template>
    <div style="padding: 20px ;">
      
        <section class="page-title p_relative centred">
            <div class="auto-container">
                <div class="content-box">
                    <h1 class="d_block fs_60 lh_70 fw_bold mb_10">{{ $t('globalTrans.our_services_menu') }}</h1>
                </div>
            </div>
        </section>
     
        <section class="service-19 p_relative ">
            <div class="tabs-box">
                <div class=" p_relative d_block my_120">
                    <div class=" p_relative d_block mb_70">
                        <div class="auto-container max-width-1500">
                            <ul class="tab-btns tab-buttons clearfix">
                                <a href="#software-development" @click="activeTab = 1">
                                    <li class="tab-btn tabHeight " :class="{ 'active-btn': activeTab === 1 }">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-11"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.software_development') }}</h6>
                                    </li>
                                </a>

                                <a href="#automation" @click="activeTab = 2">
                                    <li class="tab-btn tabHeight"  :class="{ 'active-btn': activeTab === 2 }">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-12"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.automation') }}</h6>
                                    </li>
                                </a>

                                <a href="#AI" @click="activeTab = 3" >
                                    <li class="tab-btn tabHeight"  :class="{ 'active-btn': activeTab === 3 }" >
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-13"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.artificial') }}</h6>
                                    </li>
                                </a>

                                <a  href="#web-application" @click="activeTab = 4" >
                                    <li  id="software-development" class="tab-btn tabHeight"  :class="{ 'active-btn': activeTab === 4 }">
                                        <div class="icon-box p_absolute fs_30 color_black tran_5 t_25 l_50"><i
                                                class="icon-119"></i></div>
                                        <h6 class="fs_16 tran_5">{{ $t('globalTrans.application') }}</h6>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div class="auto-container">
                        <div class="tabs-content">
                            <div class="tab active-tab"  data-aos="fade-down" data-aos-delay="200">
                                <div class="inner-box p_relative mb_150">
                                    <div class="reverse_flex row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block mr_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{
                                                            $t('globalTrans.software_development') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins text-justify">{{
                                                            $t('globalTrans.software_development_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.least_technology') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.scalabe_software') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.integration_support') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.robust_relation') }}

                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25">
                                                            {{ $t('globalTrans.secure_development') }}

                                                        </li>
                                                    </ul>
                                                    <div class="btn-box">
                                                            <NuxtLink to="services/softwaredevelopment"><button
                                                                class="theme-btn theme-btn-five">{{
                                                                    $t('globalTrans.read_more') }}<i
                                                                    class="icon-4">
                                                                </i></button></NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block ml_30">
                                                    <div class="shape">
                                                        <div class="shape-1 float-bob-x p_absolute w_95 h_95"
                                                        >
                                                        </div>
                                                        <div class="shape-2 p_absolute b_20 float-bob-y"
                                                         >
                                                        </div>
                                                        <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure  class="image p_relative d_block b_radius_10"><img
                                                            src="~/assets/images/service/s1.png" alt=""></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="automation"  class="tab "  data-aos="fade-down" data-aos-delay="200">

                                <div  class="inner-box p_relative mb_150">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block mr_30">
                                                    <div class="shape">
                                                        <div class="shape-4 float-bob-x p_absolute w_95 h_95"
                                                         >
                                                        </div>
                                                        <div class="shape-5 p_absolute b_20 float-bob-y"
                                                         >
                                                        </div>
                                                        <div class="shape-6 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="~/assets/images/service/s2.png" alt="">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block ml_30">
                                                    <div class="title_on_top sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{
                                                            $t('globalTrans.automation') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins text-justify">{{
                                                            $t('globalTrans.automation_process_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.real_time') }}

                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.reduce_solutions') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.scalabe_solutions') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.time_cost') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.connection_between') }}</li>


                                                    </ul>
                                                    <div class="btn-box">
                                                            <NuxtLink to="services/automationofyourprocess"><button
                                                                class="theme-btn theme-btn-five">{{
                                                                    $t('globalTrans.read_more') }}<i
                                                                    class="icon-4"></i></button></NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab " id="AI" data-aos="fade-down" data-aos-delay="200">

                                <div class="inner-box p_relative mb_150">
                                    <div class="reverse_flex row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block mr_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{
                                                            $t('globalTrans.artificial') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins text-justify">{{
                                                            $t('globalTrans.artification_service_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.customer') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.custom_service') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.reduces_respone_time') }}</li>

                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.analysis') }}</li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.enhanced_customer') }}
                                                        </li>
                                                    </ul>
                                                    <div class="btn-box">
                                                            <NuxtLink to="services/artificialintelligence"><button
                                                                class="theme-btn theme-btn-five">{{
                                                                    $t('globalTrans.read_more') }}<i
                                                                    class="icon-4"></i></button></NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block ml_30">
                                                    <div class="shape">
                                                        <div class="float-bob-x shape-1 p_absolute w_95 h_95"
                                                          >
                                                        </div>
                                                        <div class="shape-2 p_absolute b_20 float-bob-y"
                                                           >
                                                        </div>
                                                        <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="~/assets/images/service/s3.png" alt=""></figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- web application  -->

                            <div class="tab "  data-aos="fade-down" data-aos-delay="200">

                                <div class="inner-box p_relative">
                                    <div class="row clearfix">
                                        <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div class="image_block_24">
                                                <div class="image-box p_relative d_block mr_30">
                                                    <div class="shape">
                                                        <div class="float-bob-x shape-4 p_absolute w_95 h_95"
                                                          >
                                                        </div>
                                                        <div class="shape-5 p_absolute b_20 float-bob-y"
                                                         >
                                                        </div>
                                                        <div class="shape-6 p_absolute w_170 h_170 bg-color-1 b_radius_50">
                                                        </div>
                                                    </div>
                                                    <figure class="image p_relative d_block b_radius_10"><img
                                                            src="~/assets/images/service/create-app.webp" alt="">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="web-application" class="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div class="content_block_27">
                                                <div class="content-box p_relative d_block ml_30">
                                                    <div class="sec-title-six p_relative d_block mb_25">
                                                        <h2 class="d_block fs_40 lh_50 fw_bold">{{
                                                            $t('globalTrans.application') }}
                                                        </h2>
                                                    </div>
                                                    <div class="text p_relative d_block mb_25">
                                                        <p class="font_family_poppins text-justify">{{
                                                            $t('globalTrans.application_creation_text') }}</p>
                                                    </div>
                                                    <ul class="list-style-one clearfix p_relative d_block mb_35">
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.cross_development') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.custom_modern_design') }}
                                                        </li>

                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.user_focused') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25  mb_13">
                                                            {{ $t('globalTrans.scalable_applications') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25 mb_13">
                                                            {{ $t('globalTrans.maintenance') }}
                                                        </li>
                                                        <li
                                                            class="p_relative d_block fs_16 lh_25 fw_medium pull-left font_family_inter pl_25  mb_13">
                                                            {{ $t('globalTrans.notification') }}
                                                        </li>
                                                    </ul>
                                                    <div class="btn-box">
                                                    <NuxtLink to="services/applicationcreation"><button
                                                                class="theme-btn theme-btn-five">{{
                                                                    $t('globalTrans.read_more') }}<i
                                                                    class="icon-4"></i></button></NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- quote-one -->
        <section class="quote-one p_relative pb_150" data-aos="fade-down" data-aos-delay="200">
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_six p_relative">
                            <div class="bg-shape p_absolute b_radius_50 l_0"></div>
                            <div class="shape parallax-scene parallax-scene-4">
                                <div  class="shape-1 p_absolute w_150 h_150"
                                    ></div>
                                <div  class="shape-2 p_absolute"
                                    ></div>
                            </div>
                            <div
                                class="content-box p_relative d_block pt_40 pr_40 pb_40 pl_40 b_radius_10 b_shadow_7 ml_55 mr_85 z_1">
                                <div class="tabs-box">
                                  
                                    <div class="tabs-content quote-content">
                                        <div class="tab active-tab" id="sec-1">
                                            <div class="inner-box">
                                                <p class="font_family_poppins mb_20 text-justify">{{
                                                    $t('globalTrans.needed_form_title') }}</p>
                                                <form action="https://formspree.io/f/mnqypkna" method="post"
                                                    class="default-form">
                                                    <div class="form-group">
                                                        <input type="text" name="name"
                                                            :placeholder="$t('globalTrans.form_name')" required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="email" name="email"
                                                            :placeholder="$t('globalTrans.form_email')" required="">
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" name="property"
                                                            :placeholder="$t('globalTrans.form_needed_description')"
                                                            required="">
                                                    </div>
                                                    <div class="form-group message-btn">
                                                        <button type="submit" class="theme-btn theme-btn-five">{{
                                                            $t('globalTrans.form_needed_submit') }}<i
                                                                class="icon-4"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column" data-aos="fade-down" data-aos-delay="200">
                        <div class="content_block_seven">
                            <div class="content-box">
                                <div class="sec-title-four p_relative d_block mb_25">
                                    <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5">{{
                                        $t('globalTrans.need') }}</h6>
                                    <h2 class="d_block fs_40 fw_bold font_family_poppins">{{ $t('globalTrans.outsource') }}
                                    </h2>
                                </div>
                                <div class="text p_relative d_block mb_25">
                                    <p class="font_family_poppins text-justify">{{ $t('globalTrans.business') }}
                                    </p>
                                </div>
                                <ul class="spacing_ul list clearfix p_relative d_block">
                                    <li class="p_relative d_block fs_16 fw_sbold font_family_poppins mb_10 pl_30">
                                        {{ $t('globalTrans.client_focused') }}</li>
                                    <li class="p_relative d_block fs_16 fw_sbold font_family_poppins pl_30">{{
                                        $t('globalTrans.adapted_for_you') }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>


// 😁🤖🤖🤖🤖🤖 🦄🦄// SEO META🦄🦄  🤖🤖🤖🤖🤖😁

useSeoMeta({
  title: 'iterates services',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// 😁🤖🤖🤖🤖🤖 🦄🦄// SEO META🦄🦄  🤖🤖🤖🤖🤖😁


import { ref } from 'vue';
const activeTab = ref(1);
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init();
});

</script>


<style scoped>
html {
  scroll-behavior: smooth;
}

.page-title {
    padding: 150px 0 0px;
}

.page-title:before {
    background: white;
}

.page-title .content-box h1 {
    color: #000;
}
.spacing_ul{
    margin-bottom: 40px;
}
.reverse_flex{
    @media screen and (max-width:995px) {
        flex-direction: column-reverse;        
    }
}
.tabHeight{
    height: 110px;
}
a{
    text-decoration: none !important;
}
.tab-btn{
    color: #141417;

}
</style>