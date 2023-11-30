<template>
               <HeaderSection/>
                    <NuxtPage/>
                <FooterSection/>
</template>
<script>
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.osano-cm-dialog {
            background: rgba(250,250,250,1);
            opacity: 1;
            color: #000000;
            border:1px solid #706ea9;
        }
a{
  text-decoration: none !important;
}

.osano-cm-widget--position_right {
    left: 12px;
}
</style>