<template>
    <div class="category-widget p_relative d_block mb_60">
        <ul class="category-list clearfix">
            <li class="p_relative d_block mb_10">
                <NuxtLink :to="localePath(`/services/softwaredevelopment`)" id="software-development-belgium"
                    class="p_relative d_block fs_16 fw_sbold font_family_inter" activeClass="current"
                    ><i class="icon-11"></i>{{
                        $t('globalTrans.software_development') }} </NuxtLink>
            </li>
            <li class="p_relative d_block mb_10">
                <NuxtLink :to="localePath(`/services/automationofyourprocess`)"
                    class="p_relative d_block fs_16 fw_sbold font_family_inter" activeClass="current"
                    ><i class="icon-11"></i>{{
                        $t('globalTrans.automation') }} </NuxtLink>
            </li>
            <li class="p_relative d_block mb_10">
                <NuxtLink :to="localePath(`/services/artificialintelligence`)" id="artificial-intelligence"
                    class="p_relative d_block fs_16 fw_sbold font_family_inter" activeClass="current"
                    ><i class="icon-11"></i>{{
                        $t('globalTrans.artificial') }} </NuxtLink>
            </li>
            <li class="p_relative d_block mb_10">
                <NuxtLink :to="localePath(`/services/applicationcreation`)" id="application-creation"
                    class="p_relative d_block fs_16 fw_sbold font_family_inter" activeClass="current"
                    ><i class="icon-11"></i>{{
                        $t('globalTrans.application') }} </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
const localePath = useLocalePath()
</script>
<style>

</style>