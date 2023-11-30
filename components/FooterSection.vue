<template>
    <div>
        <footer class="footer-three p_relative">
            <div class="auto-container">
                <div class="footer-widget-section">
                    <div class="row clearfix">
                        <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget about-widget">
                                <div class="footer-logo p_relative d_block mb_35">
                                    <a href="#" aria-label="Home">
                                      
                                        <img class="image-iterates" loading="lazy" src="~/assets/images/iterates.png" alt="iterates logo"
                                            aria-label="iterates">
                                    </a>
                                </div>
                                <div id="footertextdn" class="text footertext d-none d-sm-block">
                                    <p >{{   $t('globalTrans.footer_text') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget ml_80">
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget links-widget">
                                <div class="widget-title">
                                    <h4>iterates</h4>
                                </div>
                                <div class="widget-content put_it_on_two_columns">
                                    <ul class=" links-list clearfix ">
                                     
                                        <li> <NuxtLink :active-class="'active-link'" :to="localePath(`/about`)">{{ $t('globalTrans.about_us') }}</NuxtLink></li>
                                     
                                        <li><NuxtLink :active-class="'active-link'" :to="localePath(`/service`)">{{ $t('globalTrans.our_services_menu') }}</NuxtLink>
                                        </li>
                                        <li><a href="https://www.iterates.be/" target="_blank">{{
                                            $t('globalTrans.consulting') }}</a></li>
                                        <li><NuxtLink :active-class="'active-link'" :to="localePath(`/contact`)">{{ $t('globalTrans.contact') }}</NuxtLink></li>
                                        
                                        <li><a href="https://www.iterates.be/blog/" target="_blank">{{
                                            $t('globalTrans.blog') }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div class="footer-widget contact-widget">
                                <div class="widget-title">
                                    <h4>Contacts</h4>
                                </div>
                                <div class="widget-content">
                                    <ul class="info-list clearfix">
                                        <li><a href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9" target="_blank">{{
                                              $t('globalTrans.address') }}</a></li>
                                        <li>
                                            <a href="mailto:contact@iterates.be">Email</a>
                                        </li>
                                        <ul class="d-flex">
                                            <li class="pr_10">
                                                <a target="_blank" href="https://www.linkedin.com/company/iterates-it-development-services-and-consulting-brussels-belgium/ " class="">
                                                    <i class="h2 fa-brands fa-linkedin">
                                                    </i>
                                                 </a>
                                            </li>
                                            <li>
                                                <a target="_blank" href="https://www.instagram.com/iterates.be/" class="">
                                                    <i
                                                        class="h2 fab fa-instagram-square">
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="bottom-inner clearfix">
                        <div class="copyright pull-left">
                            <p> {{   $t('globalTrans.iterates') }} &copy; {{   $t('globalTrans.year') }}</p>
                        </div>
                        <ul class="footer-nav clearfix pull-right">
                            <!-- <li><a class="h6 small" href="https://presskite.com/presskit/iterates/" target="_blank">{{
                                  $t('globalTrans.press_kit') }}</a></li> -->
                            <li><a class="h6 small" href="/files/conditions_generales_iterates_20230701.pdf"
                                    target="_blank">{{
                                          $t('globalTrans.general_conditions') }}</a></li>
                            <li><a class="h6 small" href="https://www.iterates.be/privacy-policy/" target="_blank">{{
                                  $t('globalTrans.privacy_policy') }}</a></li>
                            <li><a class="h6 small" href="https://meet.jit.si/iterates-online-meeting" target="_blank">{{
                                  $t('globalTrans.online_meeting') }}</a>
                            </li>
                            <li><a class="h6 small" href="https://www.instagram.com/sskprod.be/?hl=fr" target="_blank">{{
                                  $t('globalTrans.footer') }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    
</template>
<script setup>

    const localePath = useLocalePath()

</script>

<style scoped>
@media screen and (max-width:549px) {
    .put_it_on_two_columns{
    columns: 2;
}
}
.active-link{
    color: #fb4754!important;
}
a{
    text-decoration: none !important;
}
</style>
