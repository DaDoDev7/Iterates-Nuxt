<template>

    
        <div>
            <!-- Page Title -->
            <section class="page-title style-two p_relative centred">
                <div class="pattern-layer">
                    <div class="shape-1 p_absolute l_120 t_60 rotate-me"
                       ></div>
                    <div class="shape-2 p_absolute t_120 r_170 float-bob-y"
                      ></div>
                </div>
                <div class="auto-container">
                    <div class="content-box">
                        <h2 class="d_block  lh_70 fw_bold mb_10"> {{ $t('projectsDetails.project') }}:</h2>
                        <h1 class="d_block fs_60 lh_70 fw_bold mb_10">embuild</h1>
                    </div>
                </div>
            </section>
            <!-- End Page Title -->
            <!-- project-details -->
            <section class="project-details p_relative pb_110">
                <div class="auto-container">
                    <div class="project-info p_relative d_block mb_90">
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12 text-column">
                                <div class="  text centred mb_60">
                                    <p style="text-align: center" class=" font_family_poppins" v-html="$t('projectsDetails.embuild.description')"> </p><br>

                                    <p style="text-align: center" class=" font_family_poppins" v-html="$t('projectsDetails.embuild.description2')"></p><br>

                                    <p style="text-align: center" class=" font_family_poppins" v-html="$t('projectsDetails.embuild.description3')"> </p><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //projectstats -->
                    <div class="project-info p_relative d_block container  mb_70" style="max-width:900px;">
                        <div class="info-list clearfix">
                            <div class="row clearfix">
                                <div class="col-lg-4 col-md-6 col-sm-12 single-column mb_20" style="border-right:1px solid #ccc">
                                    <div class="single-item p_relative d_block pull-left">
                                        <h6 class="d_block fs_16 fw_medium mb_8">{{ $t('projectsDetails.client') }}:</h6>
                                        <p class="font_family_inter">
                                            {{ $t('projectsDetails.embuild.client') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 single-column mb_20" style="border-right:1px solid #ccc">
                                    <div class="single-item p_relative d_block pull-left">
                                        <h6 class="d_block fs_16 fw_medium mb_8">{{ $t('projectsDetails.date') }}:</h6>
                                        <p class="font_family_inter">
                                            {{ $t('projectsDetails.embuild.date') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 single-column mb_20">
                                    <div class="single-item p_relative d_block pull-left">
                                        <h6 class="d_block fs_16 fw_medium mb_8">{{ $t('projectsDetails.category') }}:</h6>
                                        <p class="font_family_inter">
                                            {{ $t('projectsDetails.embuild.category') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper style="margin-bottom:100px ;"
                
                        :height="300"
                        :modules="[SwiperAutoplay,SwiperNavigation,SwiperController]"
                        
                        :loop="true"
                        :effect="'creative'"
                        :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                            
                        }"
                        :breakpoints=" {
                            640: {
                                slidesPerView: 1,
                            
                            },
                            768: {
                                slidesPerView: 2,
                            
                            },
                            1024: {
                                slidesPerView: 3,
                            
                            },
                            }"
                            >
                            <SwiperSlide>
                            <img src="~/assets/images/project/embuild/13.png" alt="">
                            </SwiperSlide> 
                            <SwiperSlide>
                            <img src="~/assets/images/project/embuild/14.png" alt="">
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="~/assets/images/project/embuild/15.png" alt="">
                            </SwiperSlide>
                          
                            
                    </Swiper>
        
                <div class="auto-container">
                    <!-- <FeedBacks :code=code /> -->
                    <div class="lower-box p_relative d_block mb_100">
                        <div class="text">
                            <p  class="font_family_poppins mb_25 text-justify">
                                {{ $t('projectsDetails.embuild.bottomDescription')}} <br><br>
                                {{ $t('projectsDetails.embuild.bottomDescription2')}}<br><br>
                                {{ $t('projectsDetails.embuild.bottomDescription3')}}<br><br>
                                {{ $t('projectsDetails.embuild.bottomDescription4')}}<br><br>
                                {{ $t('projectsDetails.embuild.bottomDescription5')}}<br><br>
                            </p>
                        </div>
                    </div>
                    <div class="nav-btn clearfix">
                        <div class="single-btn prev-btn pull-left" >
                            <NuxtLink :to="localePath('/projects/facilitag')"
                                class="p_relative d_iblock fs_15 fw_sbold font_family_inter color_black"><i class="fa-solid fa-arrow-left"></i>{{ $t('projectsDetails.prevProject') }}</NuxtLink>
                        </div>
                        <div class="single-btn next-btn pull-right">
                            <NuxtLink :to="localePath('/projects/pickactivity')"
                                class="p_relative d_iblock fs_15 fw_sbold font_family_inter color_black">{{
                                    $t('projectsDetails.nextProject') }}<i class="fa-solid fa-arrow-right"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        
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
const localePath = useLocalePath()

</script>
<style>
.page-title.style-two {
    padding: 120px 0 40px;
}
</style>