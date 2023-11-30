<template>
    <div class="contact-widget sidebar-widget p_relative d_block pt_40 pr_30 pb_40 pl_30 b_radius_5">
        <div class="widget-title p_relative d_block mb_20">
            <h3 class="d_block fs_24 lh_30 fw_sbold">{{ $t('globalTrans.contact_us') }}</h3>
        </div>
        <ul class="info-list clearfix">
            <li class="p_relative d_block fs_15 font_family_inter color_black pl_30 mb_10"><i class="icon-2"></i> <a href="tel:+32456252621" class="d_iblock color_black">{{ $t('globalTrans.number')
    }}</a></li>
            <li class="p_relative d_block fs_15 font_family_inter color_black pl_30 mb_10 "><i class="icon-137"></i>
                <a class="color_black" href="https://goo.gl/maps/Azu6GCFFhpDUCJ6J9" target="_blank">{{
                    $t('globalTrans.address') }}</a>
            </li>
            <li class="p_relative d_block fs_15 font_family_inter color_black pl_30"><i class="icon-3"></i> <a
                    href="mailto:contact@iterates.be" class="d_iblock color_black">contact@iterates.be</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ServiceContactWidget'
}
</script>
<style></style>