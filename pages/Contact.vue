<template>
    <div>
        <section class="contact-four p_relative sec-pad centred bg-gray-100">
            <div class="auto-container">
                <div class="auto-container">
                    <div class="sec-title-nine p_relative d_block centred mb_30">
                        <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_60 b_radius_5 pr-2 pl-2">{{
                            $t('globalTrans.get_touch') }}

                        </h6>
                        <h2 class="d_block fs_40 fw_bold font_family_poppins mb_60" style="text-align: center;">{{ $t('globalTrans.help_you') }}
                        </h2>
                        <p  style="text-align: center ;">{{ $t('globalTrans.contact_text') }}</p>
                        <p  style="text-align: center ;">{{ $t('globalTrans.contact_text2') }}</p><br>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn text-center">
                    <div id="calendar">
                        <div class="btn-box clearfix">
                            <a data-cal-link="rodolphebalay/it-project-meeting-iterates" style="cursor: pointer;"
                                class="cursor-pointer theme-btn theme-btn-five mr_25 b_radius_10">{{
                                    $t('globalTrans.book_meeting') }}<i  class="icon-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact-four -->
        <section class="contact-four p_relative sec-pad sec-pad2">
            <div class="shape">
                <div class="shape-1 p_absolute l_0 t_0" >
                </div>
                <div class="shape-2 p_absolute b_0 r_150"
                  >
                </div>
            </div>

            <div class="auto-container">
                <div class="sec-title-nine p_relative d_block centred mb_30">
                    <h6 class="d_iblock fs_14 lh_28 fw_sbold font_family_poppins mb_18 b_radius_5 pr-2 pl-2">{{
                        $t('globalTrans.contact_us') }}

                    </h6>
                </div>
            </div>
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-12 col-sm-12 info-column">
                        <div class="info-inner">
                            <ul class="info-list clearfix">
                                <li class="p_relative d_block pl_100 pb_18 mb_25">
                                    <div
                                        class="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                        <div class="icon p_relative d_iblock"><i class="icon-181"></i></div>
                                        <div class="icon-img hidden-icon"><img src="~/assets/images/icons/hid-icon-134.png"
                                                alt=""></div>
                                    </div>
                                    <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.company') }} </h4>
                                    <p class="font_family_poppins">{{ $t('globalTrans.company_text') }} <br>{{
                                        $t('globalTrans.company_vat') }}</p>
                                </li>
                                <li class="p_relative d_block pl_100 pb_18 mb_25">
                                    <div
                                        class="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                        <div class="icon p_relative d_iblock"><i class="icon-180"></i></div>
                                        <div class="icon-img hidden-icon"><img loading="lazy"
                                                data-src="/assets/images/icons/hid-icon-133.png"
                                                alt="iterates localisation in Brussels"></div>
                                    </div>
                                    <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.office_location') }}
                                    </h4>
                                    <p class="font_family_poppins"><a href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9"
                                            target="_blank">{{ $t('globalTrans.address') }}</a></p>
                                </li>

                                <li class="p_relative d_block pl_100 pb_18">
                                    <div
                                        class="icon-box p_absolute l_0 t_0 d_iblock w_80 h_80 lh_80 b_radius_50 text-center fs_45 z_1 mb_25 tran_5">
                                        <div class="icon p_relative d_iblock"><i class="icon-182"></i></div>
                                        <div class="icon-img hidden-icon"><img src="~/assets/images/icons/hid-icon-135.png"
                                                alt=""></div>
                                    </div>
                                    <h4 class="d_block fs_20 lh_30 fw_sbold mb_7">{{ $t('globalTrans.contact_us') }}</h4>
                                    <p class="font_family_poppins"><a href="tel:+32 4 56 25 26 21">{{
                                        $t('globalTrans.number') }}</a><br>
                                        <a href="mailto:contact@iterates.be" target="_blank"> contact@iterates.be
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 form-column">
                        <div class="form-inner p_relative ml_40 pt_45 pr_50 pb_50 pl_50 b_radius_10 b_shadow_6 no_padding_responsive">
                            <div class="text p_relative d_block mb_35">
                                <h3 class="d_block fs_30 lh_40 fw_bold">{{ $t('globalTrans.send_message') }}</h3>
                            </div>
                            <ContactForm />

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact-four end -->
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
<style scoped>
.no_padding_responsive{
    @media screen and (max-width:500px) {
        padding:15px;
        
    }
}
.icon-181, .icon-180, .icon-182 {
    position: absolute;
  font-size: 45px;
  transform: translate(-50%,-52%) !important;
}
.sec-pad{
    padding: 90px 0 45px;
}
.sec-pad2{
padding: 40px 0 45px;
}

</style>