<template>
    <div id="navbar">
        <header  class="main-header header-style-two header-style-12 fixed-header " :class="{'activeHeader': isScrolled}">
            <!-- header-lower -->
            <div class="header-lower " id="headerWrp">
                <div class="outer-container">
                    <div id="header-box" class="outer-box">
                        <div class="logo-box">
                            <div class="logo">
                                <a href="/">
                                    <img class="image-iterates" src="~/assets/images/iterates.png"
                                        alt="development services in Brussels" aria-label="iterates">
                                </a>
                            </div>
                        </div>
                        <div class="menu-area clearfix">
                            <!--Mobile Navigation Toggler-->
                            <div @click="activateMobileMenu"  class="mobile-nav-toggler" >
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                                <i class="icon-bar"></i>
                            </div>
                             <nav id="sticky-nav" class="main-menu navbar  navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation navbar-nav clearfix home-menu">
                                        <li class=" dropdown">
                                            <!-- <a href="index.html">home</a> -->
                                            <NuxtLink :active-class="'active-link'"  :to="localePath(`/`)"> {{ $t('globalTrans.home') }}</NuxtLink>
                                        </li>
                                        <!-- <li class="dropdown"><a href="about.html">about us</a></li> -->
                                        <li class="dropdown">
                                            <NuxtLink :active-class="'active-link'" :to="localePath(`/about`)"
                                                >{{ $t('globalTrans.about_us') }}</NuxtLink>
                                        </li>
                                        
                                        <li class="nav-item dropdown menuParent">
                                            <NuxtLink :active-class="'active-link'" class="toggle-services" :to="localePath(`/service`)">{{ $t('globalTrans.our_services_menu') }}</NuxtLink>

                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <NuxtLink :active-class="'active-link'" :to="localePath(`/services/softwaredevelopment`)"  class="dropdown-item">{{
                                                      $t('globalTrans.software_development') }} </NuxtLink>
                                                <NuxtLink :active-class="'active-link'" :to="localePath(`/services/automationofyourprocess`)"  class="dropdown-item">{{
                                                      $t('globalTrans.automation') }} </NuxtLink>
                                                <NuxtLink :active-class="'active-link'" :to="localePath(`/services/artificialintelligence`)" class="dropdown-item">{{
                                                      $t('globalTrans.artificial') }} </NuxtLink>
                                                <NuxtLink :active-class="'active-link'" :to="localePath(`/services/applicationcreation`)" class="dropdown-item">{{
                                                      $t('globalTrans.application') }} </NuxtLink>
                                            </div>
                                        </li>
                                        <li>
                                            <NuxtLink :active-class="'active-link'" class="toggle-contact"  :to="localePath(`/contact`)"
                                                >{{ $t('globalTrans.contact') }}
                                            </NuxtLink></li>
                                        <li class="dropdown">
                                            <a href="https://www.iterates.be/blog/" target="_blank">{{ $t('globalTrans.blog') }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <nav id="nav-right" class="main-menu nav-right">
                            <ul class="navigation nav-language">
                                <li v-if="$i18n.locale === 'fr'">
                                <NuxtLink :to="switchLocalePath('en')" >EN</NuxtLink>
                                </li>
                                <li v-if="$i18n.locale === 'en'">
                                <NuxtLink :to="switchLocalePath('fr')" >FR</NuxtLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Mobile Menu  -->
            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div @click="closeMobileMenu" class="close-btn"><i class="fas fa-times"></i></div>

                <nav class="menu-box">
                    <div class="nav-logo">
                    </div>
                    <div class="menu-outer">

                        <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix home-menu">
                                <li @click="closeMobileMenu" class=" dropdown">
                                    <!-- <a href="index.html">home</a> -->
                                    <NuxtLink :active-class="'active-link'"  :to="localePath(`/`)"
                                    >{{
                                            $t('globalTrans.home') }}</NuxtLink>
                                </li>
                                    <!-- <li class="dropdown"><a href="about.html">about us</a></li> -->
                                <li class="dropdown">
                                    <NuxtLink @click="closeMobileMenu" :active-class="'active-link'"  :to="localePath(`/about`)"
                                        >{{
                                            $t('globalTrans.about_us') }}</NuxtLink>
                                </li>
                                   
                                <li class="nav-item dropdown menuParent"><NuxtLink  :active-class="'active-link'" :to="{ name: 'service' }"
                                        >{{
                                            $t('globalTrans.our_services_menu') }}</NuxtLink>

                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NuxtLink @click="closeMobileMenu" :active-class="'active-link'" :to="localePath(`/services/softwaredevelopment`)" class="dropdown-item" >{{
                                            $t('globalTrans.software_development') }}</NuxtLink>
                                        <NuxtLink @click="closeMobileMenu" :active-class="'active-link'" :to="localePath(`/services/automationofyourprocess`)" class="dropdown-item">{{
                                            $t('globalTrans.automation') }}</NuxtLink>
                                        <NuxtLink @click="closeMobileMenu" :active-class="'active-link'" :to="localePath(`/services/artificialintelligence`)" class="dropdown-item">{{
                                            $t('globalTrans.artificial') }}</NuxtLink>
                                        <NuxtLink @click="closeMobileMenu" :active-class="'active-link'" :to="localePath(`/services/applicationcreation`)" class="dropdown-item">{{
                                            $t('globalTrans.application') }}</NuxtLink>
                                    </div>
                                </li>

                                <li @click="closeMobileMenu" ><NuxtLink :active-class="'active-link'" class="toggle-contact"  :to="localePath(`/contact`)"
                                        >{{
                                            $t('globalTrans.contact') }}</NuxtLink>
                                </li>

                                <li :active-class="'active-link'" class="dropdown">
                                    <a href="https://www.iterates.be/blog/" target="_blank">{{
                                    $t('globalTrans.blog') }}</a>
                                </li>
                                </ul>
                                <ul class="navigation nav-language">
                                <li v-if="$i18n.locale === 'fr'">
                                <NuxtLink @click="closeMobileMenu" :to="switchLocalePath('en')" >EN</NuxtLink>
                                </li>
                                <li v-if="$i18n.locale === 'en'">
                                <NuxtLink @click="closeMobileMenu" :to="switchLocalePath('fr')" >FR</NuxtLink>
                                </li>
                            </ul>
                        </div>


                    </div>
                </nav>
            </div><!-- End Mobile Menu -->

            <!--sticky Header-->


        </header>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

 const switchLocalePath = useSwitchLocalePath()
 
 const localePath = useLocalePath()

            import { onMounted, ref } from 'vue';

            const isScrolled = ref(false);

            // Function to handle scroll
            const handleScroll = () => {
            isScrolled.value = window.scrollY > 0;
            };

            onMounted(() => {
            
            if (process.client) {
             window.addEventListener('scroll', handleScroll);
            }
            });

// mobile menu logic
            
const activateMobileMenu = () => {
const mobileNavToggler = document.querySelector('.mobile-nav-toggler');
mobileNavToggler.addEventListener('click', () => {
document.body.classList.add('mobile-menu-visible');
});
};

const closeMobileMenu = () => {

      document.body.classList.remove('mobile-menu-visible');
    
  };


            
            
</script>


<style scoped>
.menuParent {
    position: relative !important;
}

.menuParent:hover .dropdown-menu {
    display: block
}

.dropdown-menu {
    top: 80%;
}


.dropdown-item:hover,
.dropdown-item:focus {
    background-color: transparent;
    text-decoration: none;
    color: #fb4754 !important
}
.active-link{
    color: #fb4754!important;
}
.activeHeader{
    transition:all .3s ease-in-out !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color:  rgb(255, 255, 255);
    box-shadow:0 0 40px rgba(0, 0, 0, 0.10);
    z-index: 999999;
}
a{
    text-decoration: none !important;
}
ul{

    margin-bottom: 0;
}
</style>
