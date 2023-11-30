<template>
    <form class="contact-form" method="post" action="https://formspree.io/f/mnqypkna">
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6 col-sm-12 form-group ">
                <input class="b_shadow_14" type="text" name="username" :placeholder="$t('globalTrans.form_name')"
                    required="">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                <input class="b_shadow_14" type="email" name="email" :placeholder="$t('globalTrans.form_email')"
                    required="">
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                <input class="b_shadow_14" type="text" name="phone" :placeholder="$t('globalTrans.form_phone')">
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 form-group">
                <input class="b_shadow_14" type="text" name="subject" 
                    :placeholder="$t('globalTrans.form_subject')">
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea class="b_shadow_14" name="message" :placeholder="$t('globalTrans.form_message')" required=""></textarea>
            </div>
        </div>
        <div class="more-btn centred p_relative mt_20 text-center">
            <button class="theme-btn theme-btn-eight b_radius_10_send_button" type="submit">{{
                $t('globalTrans.button') }}<i class="icon-4"></i></button>
        </div>
    </form>
</template>
<script>

</script>
<style></style>