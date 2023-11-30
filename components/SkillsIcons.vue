<template>
    
        <section class="skills-two about-page-1 p_relative sec-pad">
            <div class="pattern-layer p_absolute l_60 rotate-me"
                ></div>
            <div class="auto-container">
                <div class="row align-items-center clearfix" style="display:flex; gap:3em; ">
                    <div class="col-lg-9col-md-12 col-sm-12 content-column mb_80">
                        <div class="content_block_24">
                            <div class="content-box">
                                <div class="text-center sec-title-nine p_relative d_block  mt_10 ">
                                    <h6
                                        class="d_iblock pl_20 pr_20 fs_14 lh_30 b_radius_5 mb_50 fw_medium font_family_poppins">
                                        {{ $t('globalTrans.our_skills') }}
                                    </h6>
                                    <h2 class="d_block fs_40 fw_bold font_family_inter mb_60">{{ $t('globalTrans.skills') }}
                                    </h2>
                                    <p style="margin-bottom: 0;" class="font_family_poppins text-center">{{ $t('globalTrans.skills_text') }}</p>
                                    <p class="font_family_poppins text-center">{{ $t('globalTrans.skills_text2') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9col-md-12 col-sm-12 content-column">
                        <div >
                            <div class="content-box">
                                <div class="gridSkills">
                                    
                                    <div  class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="50" >
                                       <img class="iconSkill" src="~/assets/images/icons/skillsIcons/icon1.svg" alt="skill icon">
                                        <h6 class="font_family_poppins">{{ $t('globalTrans.web_development') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="100">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/icon2.svg" alt="skill icon">
                                        <h6 class="font_family_poppins">{{ $t('globalTrans.application_development') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="150">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/archi.svg" alt="skill icon">
                                        <h6 class="font_family_poppins">{{ $t('globalTrans.AI_&_Software_Architecture') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="200">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/icon4.svg" alt="skill icon">
                                        <h6 class="font_family_poppins">{{ $t('globalTrans.IT_Architecture') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="250">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/icon5.svg" alt="skill icon">
                                        <h6 class="font_family_poppins">{{ $t('globalTrans.Functional_Analysis') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="300">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/mano.svg" alt="skill icon">
                                        <h6 class="font_family_poppins">{{ $t('globalTrans.Project_Management') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="350">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/icon7.svg" alt="skill icon">
                                        <h6 class="d_block fs_16 lh_20 mb_7 font_family_poppins">{{ $t('globalTrans.testing') }}
                                        </h6>
                                    </div>
                                    <div class="skillSingleContainer mb_30 " data-aos="fade-up" data-aos-delay="400">
                                        <img class="iconSkill" src="~/assets/images/icons/skillsIcons/icon8.svg" alt="skill icon">
                                        <h6 class="d_block fs_16 lh_20 mb_7 font_family_poppins">{{ $t('globalTrans.Agile_Mindset') }}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    
</template>

<script>

 
</script>

<style scoped>
.iconSkill{
    width: 80px;
    margin-bottom: 50px;
}
.gridSkills{
    display: grid;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(2, 1fr));
    gap: 2em;
    @media screen and (max-width:768px) {
        grid-template-columns: repeat(3, minmax(150px, 1fr));
        
    };
    @media screen and (max-width:534px) {
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        
    }
}
.skillSingleContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h6{
    text-align: center;
}

</style>