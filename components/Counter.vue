<template>
    <section class="funfact-three pb_100 text-center p_relative" ref="funfactSection">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="col-lg-4 col-md-4 col-sm-12 funfact-block">
            <div class="wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div class="inner-box p_relative d_block marginresponsive">
                <div class="count-outer count-box p_relative d_block fs_70 lh_70 fw_bold mb_19">
                    <count-up class="count-text g_color_2" :options="options" :startVal='0' :end-val="16" style="text-align: center;"/>
                </div>
                <p class="p_relative d_block fs_16 lh_20 fw_medium font_family_oxygen g_color_2 1" style="text-align: center;">
                  {{ $t('globalTrans.experience_staff') }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 funfact-block">
            <div class="wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div class="inner-box p_relative d_block marginresponsive">
                <div class="count-outer count-box p_relative d_block fs_70 lh_70 fw_bold mb_19">
                    <count-up style="display:inline-block ;" class="count-text g_color_2" :options="options" :startVal='0' :end-val="360"/><span style="display: inline-block; text-align: center;" class="g_color_2 1">°</span>
                </div>
                <p class="p_relative d_block fs_16 lh_20 fw_medium font_family_oxygen g_color_2" style="text-align: center;">
                  {{ $t('globalTrans.project_management') }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 funfact-block">
            <div class="wow slideInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div class="inner-box p_relative d_block marginresponsive">
                <div class="count-outer count-box p_relative d_block fs_70 lh_70 fw_bold mb_19">
                    <count-up class="count-text g_color_2" :options="options" :startVal='0' :end-val="12"/>
                </div>
                <p class="p_relative d_block fs_16 lh_20 fw_medium font_family_oxygen g_color_2 1" style="text-align: center;">
                  {{ $t('globalTrans.year_experience') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script>
import { defineComponent, ref } from "vue";
import CountUp from "vue-countup-v3";
export default defineComponent({
  components: {
    CountUp,
  },
  setup() {
    const options = ref({
      enableScrollSpy: true,
      useEasing: true,
      useGrouping: true,
      separator: " ",
      decimal: ",",
      prefix: "",
      suffix: "",
      duration: 5
    });
    return {
      options,
    };
  },
});
  </script>
  <style>

  @media screen and (max-width:800px) {

    .marginresponsive{
      margin-bottom: 80px;
    }
    
  }
</style>