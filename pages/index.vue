<template>
    <div>
         <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6CKBRT" height="0" width="0"
                style="display:none;visibility:hidden"></iframe></noscript> -->


        <!-- banner-three-->
        <section class="banner-three p_relative pb_160">
            <div class="shape parallax-scene parallax-scene-1">
                <div data-depth="0.40" class="shape-1 p_absolute"
                    ></div>
                <div data-depth="0.30" class="shape-2 p_absolute"
                    ></div>
                <div data-depth="0.50" class="shape-3 p_absolute"
                    ></div>
                <div data-depth="0.40" class="shape-4 p_absolute"></div>
            </div>
            <div class="pattern-layer hero-shape-four p_absolute"></div>
            <div class="pattern-layer-2 hero-shape-four p_absolute"></div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div class="content-box p_relative d_block   " data-aos="fade-up">
                            <h1 class="d_block fs_35 lh_60 font_family_jost mb_25 website-title">{{ $t('globalTrans.header')
                            }}
                                <NuxtImg format="webp" class="icon-img flag icon p_relative d_iblock" 
                                    src="/images/icons/be-flag.svg"
                                    alt="book a meeting for development services in Brussels "/>
                            </h1>
                            <p style="text-align: left;" class="d_block fs_52 lh_60 fw_bold font_family_jost mb_25 black_color">{{
                                $t('globalTrans.hea_about_focas') }},<br>
                                {{ $t('globalTrans.hea_it_manage') }}</p>
                            <p class="fs_17 font_family_poppins lh_28 mb_20">{{ $t('globalTrans.build_text') }}<br
                                    id="break-section-one">
                                {{$t('globalTrans.answer_text') }}</p>
                            <div class="btn-box clearfix">
                                <a data-cal-link="rodolphebalay/it-project-meeting-iterates" style="cursor: pointer;"
                                    class="cursor-pointer theme-btn theme-btn-five mr_25 b_radius_10">{{$t('globalTrans.book_meeting') }}<i class="icon-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service-four -->
        <section id="our-services" class="service-four p_relative sec-pad">

            <div class="pattern-layer p_absolute l_0 t_0 r_0 rotate-me"></div>
            <div class="auto-container">
                <div class="sec-title-four p_relative d_block centred mb_50">
                    <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5">{{
                        $t('globalTrans.secound_button') }}.
                    </h6>
                    <h2 class="d_block fs_40 fw_bold font_family_poppins">{{ $t('globalTrans.digital') }} {{$t('globalTrans.expertise') }}</h2>
                </div>
                <div class="row clearfix flex_correction">
                    <div class="col-lg-6 col-md-6 col-sm-12 service-block" id="flex-corrected">
                        <div class=" service-block-four  fadeInRight  "  data-aos="fade-up">
                            <div id="service-four"
                                class="inner-box p_relative d_block pl_50 pt_30 pr_50 pb_50 b_radius_10 b_shadow_6 height-360p">

                                <div style="margin: 0;" class="text p_relative d_block">
                                    <div class="icon-box p_absolute  w_80 h_80 lh_65 fs_45 centred b_radius_50">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                                fill="currentColor" class="bi bi-rocket-takeoff" viewBox="0 0 16 16">
                                                <path
                                                    d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z" />
                                                <path
                                                    d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z" />
                                                <path
                                                    d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4
                                        class="p_relative d_block fs_20 lh_30 fw_sbold font_family_poppins pl_100 mb_16 pt_25">
                                        {{ $t('globalTrans.software_development') }}
                                    </h4>
                                    <p class="d_block font_family_poppins mb_12 text-justify pt_25">{{
                                        $t('globalTrans.software_text') }}
                                    </p>
                                    <div class="link">
                                        <NuxtLink  :to="localePath('/services/softwaredevelopment')"
                                            class="p_relative d_iblock fs_15 lh_25 fw_bold font_family_poppins">{{
                                                $t('globalTrans.learn_more') }}<i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 service-block" id="flex-corrected">
                        <div class=" service-block-four  fadeInLeft  "  data-aos="fade-up">
                            <div id="service-four"
                                class="inner-box p_relative d_block pl_50 pt_30 pr_50 pb_75 b_radius_10 b_shadow_6 mb_30 height-360p">


                                <div style="margin: 0;" class="text p_relative d_block">
                                    <div class="icon-box p_absolute   w_80 h_80 lh_65 fs_45 centred b_radius_50">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                                fill="currentColor" class="" viewBox="0 0 16 16">
                                                <path
                                                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h4
                                        class="p_relative d_block fs_20 lh_30 fw_sbold font_family_poppins mb_16 pl_100 pt_25">
                                        {{ $t('globalTrans.automation') }}
                                    </h4>
                                    <p class="d_block font_family_poppins mb_12 text-justify pt_25">{{
                                        $t('globalTrans.automation_text') }}
                                    </p>
                                    <div class="link">
                                        <NuxtLink :to="localePath('/services/automationofyourprocess')"
                                            class="p_relative d_iblock fs_15 lh_25 fw_bold font_family_poppins">{{
                                                $t('globalTrans.learn_more') }}<i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 service-block" id="flex-corrected">
                        <div class=" service-block-four  fadeInRight  "  data-aos="fade-up">
                            <div id="service-four"
                                class="inner-box p_relative d_block pl_50 pt_30 pr_50 pb_50 b_radius_10 b_shadow_6 mb_30 height-360p">

                                <div style="margin: 0;" class="text p_relative d_block">
                                    <div class="icon-box p_absolute  w_80 h_80 lh_65 fs_45 centred b_radius_50">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                                fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
                                                <path
                                                    d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                                <path
                                                    d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4
                                        class="p_relative d_block fs_20 lh_30 fw_sbold font_family_poppins mb_16 pl_100 pt_25">
                                        {{ $t('globalTrans.artificial') }}
                                    </h4>
                                    <p class="d_block font_family_poppins mb_12 text-justify pt_25">{{
                                        $t('globalTrans.artificial_text') }}
                                    </p>
                                    <div class="link">
                                        <NuxtLink :to="localePath('/services/artificialintelligence')"
                                            class="p_relative d_iblock fs_15 lh_25 fw_bold font_family_poppins">{{
                                                $t('globalTrans.learn_more') }}<i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 service-block" id="flex-corrected">
                        <div class=" service-block-four  fadeInLeft  "  data-aos="fade-up">
                            <div id="service-four"
                                class="inner-box p_relative d_block pl_50 pt_30 pr_50 pb_75 b_radius_10 b_shadow_6 height-360p">

                                <div style="margin: 0;" class="text p_relative d_block">
                                    <div class="icon-box p_absolute w_80 h_80 lh_65 fs_45 centred b_radius_50">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                                fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4
                                        class="p_relative d_block fs_20 lh_30 fw_sbold font_family_poppins mb_16 pl_100 pt_25">
                                        {{ $t('globalTrans.application') }}
                                    </h4>
                                    <p class="d_block font_family_poppins mb_12 text-justify pt_25"> {{
                                        $t('globalTrans.application_text') }}
                                    </p>
                                    <div class="link">
                                        <NuxtLink :to="localePath('/services/applicationcreation')"
                                            class="p_relative d_iblock fs_15 lh_25 fw_bold font_family_poppins">{{
                                                $t('globalTrans.learn_more') }}<i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="more-btn centred p_relative mt_60 ">
                    <NuxtLink to="/service" class="theme-btn theme-btn-ten b_radius_10">{{ $t('globalTrans.our_services')
                    }}<i class="icon-4"></i></NuxtLink>
                </div>
            </div>
        </section>
        <!-- service-four end -->

        <!-- chooseus-nine -->
        <section class="chooseus-nine p_relative pb_75">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_five">
                            <div class="content-box p_relative d_block mr_30">
                                <div class="sec-title-nine p_relative d_block mb_25">
                                    <h6
                                         class="align_img_reactive d_iblock pl_20 pr_20 fs_14 lh_30 b_radius_5 mb_18 fw_medium font_family_poppins width_button_why_us" >
                                        {{ $t('globalTrans.why_us') }}</h6>
                                    <h2 class="align_text_reactive d_block fs_45 lh_55 fw_bold font_family_jost">{{ $t('globalTrans.why_should')
                                    }} <br />{{ $t('globalTrans.choose_iterates') }}</h2>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="align_img_reactive image_block_14">
                                            <NuxtImg format="webp"  class="image image-2 mt_20 r_0 b_0  slideInRight   img-radius d-lg-none image-iterates365x366" 
                                                data-aos="fade-up"
                                                src="/images/resource/iterates365x366.png"
                                                alt="development IT services in Brussels iterates team" />
                                        </div>
                                    </div>
                                </div>
                            
                                        <CAccordion :active-item-key="1">
                                            <CAccordionItem :item-key="1">
                                                <CAccordionHeader class="fs_18">
                                                    <strong>{{ $t('globalTrans.honest_text') }}</strong>
                                                </CAccordionHeader>
                                                <CAccordionBody class="p_20 fs_18 font_family_jost p_relative"  v-html="$t('globalTrans.honest_para')">
                                               
                                                </CAccordionBody>
                                            </CAccordionItem>
                                            <CAccordionItem :item-key="2">
                                                <CAccordionHeader  class="fs_18">
                                                    <strong>{{ $t('globalTrans.we_take') }}</strong>
                                                </CAccordionHeader>
                                                <CAccordionBody class="p_20 fs_18 font_family_jost p_relative" v-html="$t('globalTrans.we_take_para')">
                                               
                                                </CAccordionBody>
                                            </CAccordionItem>
                                            <CAccordionItem :item-key="3">
                                                <CAccordionHeader class="fs_18">
                                                    <strong>{{ $t('globalTrans.technology') }}</strong>
                                                </CAccordionHeader>
                                                <CAccordionBody class="p_20 fs_18 font_family_jost p_relative" v-html="$t('globalTrans.tech_para')">
                                     
                                                </CAccordionBody>
                                            </CAccordionItem>
                                        </CAccordion>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column accordionfixheight" >
                        <div class="image_block_14">
                            <div class="shape">
                                <div class="shape-1 p_absolute rotate-me"
                                    ></div>
                                <div class="shape-2 p_absolute rotate-me"
                                    ></div>
                                <div class="shape-3 p_absolute"></div>
                                <div class="shape-4 p_absolute"></div>
                                <div class="shape-5 p_absolute"></div>
                            </div>
                            <NuxtImg format="webp" 
                                class="image image-1 p_relative d_block   img-radius d-none d-md-block"
                                data-aos="fade-up" loading="lazy" src="/images/resource/iterates422x422.png"  
                                width="422px" alt="IT services and consulting in Brussels"/>
                            <NuxtImg format="webp"  class="image image-2 p_absolute r_0 b_0  slideInRight   img-radius d-none d-md-block"
                                data-aos="fade-up" loading="lazy" src="/images/resource/iterates365x366.png" 
                                width="365px" alt="devolpment It services at iterates in Brussels"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- chooseus-nine end -->
        <!-- testimonial-five -->
        <section class="testimonial-five p_relative pt_140 pb_120 testimonial-page-2">
            <div class="sec-title-four p_relative d_block centred mb_50">
                <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5">{{
                    $t('globalTrans.button_three') }}</h6>
                <h2 class="d_block fs_40 fw_bold font_family_poppins z-index">{{ $t('globalTrans.button_title') }}</h2>
            </div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="image_block_14">
                        <div class="image-box p_relative d_block pb_150">
                            <div class="shape">
                                <div class="shape-1 p_absolute rotate-me"
                                    ></div>
                                <div class="shape-2 p_absolute rotate-me"
                                    ></div>
                                <div class="shape-3 p_absolute"></div>
                                <div class="shape-4 p_absolute"></div>
                                <div class="shape-5 p_absolute"></div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                        <div class="testimonial-block-one" data-aos="fade-up" data-aos-delay="500">
                            <div class="inner-box p_relative d_block b_radius_10 pt_35 pr_20 pb_40 pl_20">
                                <div class="text p_relative d_block mb_50">
                                    <ul class="rating clearfix p_relative d_block mb_15">
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16"><i class="icon-20"></i></li>
                                    </ul>
                                    <p class="font_family_poppins text-justify">{{ $t('globalTrans.title_text') }}</p>
                                </div>
                                <div class="author p_relative d_block pl_90 pt_7 pb_11">
                                    <div class="thumb-box p_absolute l_0 t_0 w_70 h_70 b_radius_50">
                                        <NuxtImg format="webp"  src="/images/resource/2.png" width="70px" height="70px"
                                            alt="satisfaction client IT services Brussels"/>
                                    </div>
                                    <h4 class="d_block fs_20 lh_30 mb_2">{{ $t('globalTrans.supia_text') }}</h4>
                                    <span class="designation p_relative d_block fs_16 lh_20 font_family_oxygen"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                        <div class="testimonial-block-one" data-aos="fade-up" data-aos-delay="500">
                            <div class="inner-box p_relative d_block b_radius_10 pt_35 pr_20 pb_40 pl_20">
                                <div class="text p_relative d_block mb_50">
                                    <ul class="rating clearfix p_relative d_block mb_15">
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16 mr_5"><i class="icon-20"></i>
                                        </li>
                                        <li class="p_relative d_iblock pull-left fs_16"><i class="icon-20"></i></li>
                                    </ul>
                                    <p class="font_family_poppins color_black text-justify">{{ $t('globalTrans.text') }}</p>
                                </div>
                                <div class="author p_relative d_block pl_90 pt_7 pb_11">
                                    <div class="thumb-box p_absolute l_0 t_0 w_70 h_70 b_radius_50"><NuxtImg format="webp" 
                                            src="/images/resource/1.png" width="70px" height="70px"
                                            alt="safisfaction client development services brussels"/>
                                    </div>
                                    <h4 class="d_block fs_20 lh_30 mb_2">Gaël Van Gijsegem</h4>
                                    <span class="designation p_relative d_block fs_16 lh_20 font_family_oxygen"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial-five -->
        <!-- project-six -->
        <section class="testimonial-five p_relative testimonial-page-2">
            <div class="auto-container">
                <div class="sec-title-nine p_relative d_block mb_50 centred">
                    <h6 class="d_iblock pl_20 pr_20 fs_14 lh_30 b_radius_5 mb_18 fw_medium font_family_poppins">{{
                        $t('globalTrans.recent') }}</h6>
                    <h2 class="d_block fs_45 lh_55 fw_bold font_family_jost">{{ $t('globalTrans.recent_title') }}</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 project-block">
                        <div class="project-block-five" data-aos="fade-up" data-aos-delay="700">
                            <div class="inner-box p_relative d_block">
                                <div class="image-box p_relative d_block">
                                    <div class="image p_relative d_block b_radius_5"><NuxtImg format="webp" class="image-facilitag"
                                              src="/images/project/facilitag.png" alt="FaciliTag Saas product"/>
                                    </div>
                                    <div class="link p_absolute tran_5">
                                        <NuxtLink :to="localePath('/projects/facilitag')"
                                            class="w_60 h_60 lh_60 centred color_black p_relative d_iblock fs_16"
                                            aria-lebel="facilitag"><i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                                <div class="lower-content p_relative pt_25 pb_40">
                                    <h4 class="d_block fs_20 lh_30 fw_sbold font_family_jost mb_4">
                                        <NuxtLink :to="localePath('/projects/facilitag')" class="d_iblock p_relative color_black"
                                            aria-lebel="embuild"> {{
                                                $t('globalTrans.software_development') }}</NuxtLink>
                                    </h4>
                                    <p class="d_block fs_16 font_family_poppins">{{ $t('globalTrans.project_tag') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 project-block">
                        <div class="project-block-five" data-aos="fade-up" data-aos-delay="800">
                            <div class="inner-box p_relative d_block">
                                <div class="image-box p_relative d_block">
                                    <div class="image p_relative d_block b_radius_5"><NuxtImg format="webp" class="image-pick" 
                                            src="/images/project/embuild.png" alt="creative web application development"/>
                                    </div>
                                    <div class="link p_absolute tran_5">
                                        <NuxtLink :to="localePath('/projects/embuild')"
                                            class="w_60 h_60 lh_60 centred color_black p_relative d_iblock fs_16"
                                            aria-lebel="embuild"><i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                                <div class="lower-content p_relative pt_25 pb_40">
                                    <h4 class="d_block fs_20 lh_30 fw_sbold font_family_jost mb_4">
                                        <NuxtLink :to="localePath('/projects/embuild')" class="d_iblock p_relative color_black"
                                            aria-lebel="embuild"> {{
                                                $t('globalTrans.process_automation') }}</NuxtLink>

                                    </h4>
                                    <p class="d_block fs_16 font_family_poppins">{{ $t('globalTrans.project_embuild') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 project-block">
                        <div class="project-block-five" data-aos="fade-up" data-aos-delay="900">
                            <div class="inner-box p_relative d_block">
                                <div class="image-box p_relative d_block">
                                    <div class="image p_relative d_block b_radius_5"><NuxtImg format="webp"  class="image-slopes"
                                         src="/images/project/activity.png" alt="application development Brussels"/>
                                    </div>
                                    <div class="link p_absolute tran_5">
                                        <NuxtLink :to="localePath('/projects/pickactivity')"
                                            class="w_60 h_60 lh_60 centred color_black p_relative d_iblock fs_16"
                                            aria-lebel="pickactivity"><i class="icon-4"></i></NuxtLink>
                                    </div>
                                </div>
                                <div class="lower-content p_relative pt_25 pb_40">
                                    <h4 class="d_block fs_20 lh_30 fw_sbold font_family_jost mb_4">
                                        <NuxtLink :to="localePath('/projects/pickactivity')"
                                            class="d_iblock p_relative color_black" aria-lebel="pickactivity"> {{
                                                $t('globalTrans.application') }}</NuxtLink>
                                    </h4>
                                    <p class="d_block fs_16 font_family_poppins">{{ $t('globalTrans.project_activity') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more-btn centred p_relative mt_20 text-center">
                <a href="#contact" class="theme-btn theme-btn-ten b_radius_10">{{ $t('globalTrans.lets_discuss') }}<i
                        class="icon-4"></i></a>
            </div>
        </section>

        <!-- team-three -->
        <section class="team-three p_relative pt_140 centred my-5">
            <div class="sec-title-nine p_relative d_block centred mb_50">
                <h6 class="d_iblock pl_20 pr_20 fs_14 lh_30 b_radius_5 mb_18 fw_medium font_family_poppins">{{
                    $t('globalTrans.contact') }}</h6>
                <h2 class="d_block fs_40 fw_bold font_family_poppins">{{ $t('globalTrans.button_five') }}</h2>
            </div>
            <div class="auto-container">
                <div class="row clearfix">

                    <div class="offset-md-4 col-lg-4 col-md-6 col-sm-12 team-block">
                        <div class="team-block-one     " data-aos="fade-up">
                            <div class="inner-box p_relative d_block">
                                <div class="image-box p_relative d_block b_radius_10">
                                    <div class="image p_relative d_block"><NuxtImg format="webp"  src="/images/team/rod4.png"
                                            width="370px" height="420px" alt="Rodolphe Balay product owner Brussels"/>
                                    </div>
                                    <ul class="social-links-two">
                                        <li class="p_relative d_iblock"><a href="https://www.linkedin.com/in/rodolphebalay/"
                                                target="_blank" class="w_40 h_40 lh_40 fs_17 centred b_radius_50"
                                                aria-label="Rodolphe Balay"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <div class="lower-content p_relative d_block ml_40 mr_40">
                                    <div class="inner p_relative d_block b_radius_10 pt_20 pr_30 pb_25 pl_30">
                                        <h4 class="p_relative d_iblock fs_20 lh_30 font_family_spartan"><a target="_blank"
                                                href="https://www.linkedin.com/in/rodolphebalay/">Rodolphe Balay</a></h4>
                                        <span class="designation fs_16 p_relative d_block font_family_muli">{{
                                            $t('globalTrans.designation') }}</span>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn text-center mb_50">
                                        <div id="calendar">
                                            <div class="btn-box clearfix">
                                                <a data-cal-link="rodolphebalay/it-project-meeting-iterates"
                                                    style="cursor: pointer;"
                                                    class="cursor-pointer theme-btn theme-btn-five mr_25 b_radius_10">
                                                    {{ $t('globalTrans.lets_talk') }}<i class="icon-4"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner-box p_relative d_block my-5">
                    <a href="https://www.sortlist.com/agency/iterates" target="_blank"
                        style="display:inline-block; width:210px; height:60px;">
                        <NuxtImg format="webp" 
                            src="https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-black-light-xl.svg"
                            alt="flag" />
                    </a>
                </div>
            </div>
        </section>
        <!-- team-three end -->

        <!-- contactinfo-one -->
        <section id="contact" class="contactinfo-one  p_relative pt_130 centred" >
            <div class="bg-color p_absolute l_0 t_0 r_0 bg-gray-100"></div>
            <div class="auto-container">
                <div class="sec-title-four p_relative d_block mb_50">
                    <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5">{{
                        $t('globalTrans.contact_us') }}</h6>
                    <h2 class="d_block fs_40 fw_bold">{{ $t('globalTrans.project_mind') }} <br />{{ $t('globalTrans.meet')
                    }}</h2>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn text-center mb_50">
                    <div id="calendar">
                        <div class="btn-box clearfix">
                            <a data-cal-link="rodolphebalay/it-project-meeting-iterates" style="cursor: pointer;"
                                class="cursor-pointer theme-btn theme-btn-five mr_25 b_radius_10">{{
                                    $t('globalTrans.book_meeting') }}<i class="icon-4"></i></a>
                        </div>
                    </div>
                </div>

                <div class="row clearfix" >
                    <div class="col-lg-3 col-md-6 col-sm-12 info-column">
                        <div class="info-block-one" data-aos="fade-up" data-aos-delay="500">
                            <div class="inner-box p_relative d_block b_radius_10 b_shadow_6 pt_40 pr_40 pb_35 pl_40">
                                <div
                                    class="icon-box p_relative d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                    <div class="icon p_relative d_iblock"><i class="icon-181"></i></div>
                                    <div class="icon-img hidden-icon">
                                        <NuxtImg format="webp"  src="/images/icons/hid-icon-134.png"
                                            alt="contact for It services in Brussels"/>
                                        </div>
                                </div>
                                <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">contact@iterates.be</h4>
                                <p style="text-align:center ;" class="font_family_poppins"><a href="mailto:contact@iterates.be" target="_blank">contact@iterates.be</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 info-column">
                        <div class="info-block-one" data-aos="fade-up" data-aos-delay="500"
                        data-aos-once="true">
                            <div class="inner-box p_relative d_block b_radius_10 b_shadow_6 pt_40 pr_40 pb_35 pl_40">
                                <div
                                    class="icon-box p_relative d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                    <div class="icon p_relative d_iblock"><i class="icon-180"></i></div>
                                    <div class="icon-img hidden-icon"><NuxtImg format="webp"  src="/images/icons/hid-icon-133.png"
                                            alt="iterates localisation in Brussels"/></div>
                                </div>
                                <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.office_location') }}</h4>
                                <p style="text-align:center ;"  class="font_family_poppins"><a href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9"
                                        target="_blank">{{ $t('globalTrans.address') }}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 info-column">
                        <div class="info-block-one" data-aos="fade-up" data-aos-delay="500">
                            <div class="inner-box p_relative d_block b_radius_10 b_shadow_6 pt_40 pr_40 pb_35 pl_40">
                                <div
                                    class="icon-box p_relative d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                    <div class="icon p_relative d_iblock"><i class="icon-182"></i></div>
                                    <div class="icon-img hidden-icon"> <NuxtImg format="webp" src="/images/icons/hid-icon-135.png"
                                            alt="contact iterates for development services Brussels"/>
                                        </div>
                                </div>
                                <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.contact_us') }}</h4>
                                <p style="text-align:center ;" class="font_family_poppins"><a href="tel:+32 4 56 25 26 21">{{
                                    $t('globalTrans.contact_no') }}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contactinfo-one end -->

        <!-- contact-three end -->
        <section class="contact-three p_relative sec-pad" style="overflow:hidden;">
            <div class="shape">
                <div class="shape-1 p_absolute l_90" >
                </div>
                <div class="shape-2 p_absolute r_130 b_0"
                    >
                </div>
            </div>
            <div class="auto-container">
                <div class="row align-items-center clearfix">
                </div>
                <div class="content-column">
                    <div class="content-box p_relative d_block pl_50">
                        <div class="text p_relative d_block mb_30">
                            <h3 class="d_block fs_30 lh_40 fw_bold mb_15 text-center">{{ $t('globalTrans.it_expert') }}</h3>
                            <p class="font_family_poppins text-center">{{ $t('globalTrans.expert_text') }}</p>
                        </div>
                        <div class="form-inner p_relative ml_5 mr_5">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact-three end -->
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
 import AOS from 'aos';
    import 'aos/dist/aos.css';

    onMounted(() => {
        AOS.init();
    });
import '@coreui/coreui/dist/css/coreui.min.css'
import { CAccordion } from '@coreui/vue';
import { CAccordionHeader } from '@coreui/vue';
import { CAccordionBody } from '@coreui/vue';
import { CAccordionItem } from '@coreui/vue';



</script>
<style lang="css" scoped>
.align_text_reactive{
    @media screen and (max-width:990px){
        text-align: center;
        
    }

}
.align_img_reactive{
        @media screen and (max-width:990px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
    }
 }
 .width_button_why_us{
    max-width: 250px ;
    margin: 0 auto;
    margin-bottom: 30px;
 }
 br{
    @media only screen and (max-width: 400px){
        display: block;
    }

 }
#flex-corrected{
    @media screen and (max-width:1141px){
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 30px;
    }
 }
a{
    text-decoration: none !important;
}
.flag{
    width: 30px !important;
    height: 30px !important;
}
.icon-181, .icon-180, .icon-182 {
    position: absolute;
  font-size: 45px;
  transform: translate(-50%,-52%) !important;
}
.accordionfixheight{
    height: 500px;
}
@media screen and (max-width:768px){
    .accordionfixheight{
    height: auto;
}
}
@media screen and (max-width:1140px){
    .accordionfixheight{
    height: auto;
}
    
}


    </style>
