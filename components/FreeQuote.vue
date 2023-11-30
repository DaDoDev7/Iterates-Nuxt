<template>
    <div class="consulting-widget sidebar-widget p_relative d_block pt_40 pr_30 pb_45 pl_30 b_radius_5 mb_60">

        <div class="widget-title p_relative d_block mb_25">
            <h3 class="d_block fs_24 lh_30 fw_sbold">{{ $t('globalTrans.get_free_code') }}</h3>
        </div>
        <div class="form-inner">
            <form action="https://formspree.io/f/mnqypkna" method="post" class="default-form">
                <div class="form-group">
                    <input type="text" name="name" :placeholder="$t('globalTrans.form_name')" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" :placeholder="$t('globalTrans.form_email')" required>
                </div>
                <div class="form-group">
                    <textarea name="message" :placeholder="$t('globalTrans.form_message')"></textarea>
                </div>
                <div class="form-group message-btn">
                    <button type="submit" class="theme-btn theme-btn-eight">{{
                        $t('globalTrans.send_message') }} <i class="icon-4"></i></button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
</script>
<style></style>