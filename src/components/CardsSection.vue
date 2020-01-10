<template>
  <div class="the-narratives">
    <slot name="explore-div"></slot>
    <h2 class="the-narratives-header">STORIES FROM THE ISLAMIC CITY</h2>
    <div class="flex-container-1">
      <div class="animated fadeIn slow kf-box">
        <g-link to="/keeping-faith/">
        <div class="textbox">
          <h6 class="box-category">ARTICLE</h6>
          <h2 class="box-title">Keeping faith</h2>
          <p class="box-desc animated fadeIn">The GUIDON’s last article for the Marawi rehabilitation series debunks Islamophobic notions and puts forth a simple plea from the Muslims of Maranao: Religious understanding from their fellow Filipinos so that they may practice their faith, which is essential to their recovery, unburdened with discrimination and accusations.</p>
          <p class="box-credits">by Danielle R. Garcia and Alithea C. Soriano</p>
        </div>
        </g-link>
      </div>
      <div class="bn-box">
        <g-link to="/rehabilitation-efforts/">
        <div class="textbox">
          <h6 class="box-category">BROADCAST NEWS</h6>
          <h2 class="box-title">Marawi’s rehabilitation efforts</h2>
          <p class="box-desc animated fadeIn">As Marawi City commemorates the second year since President Rodrigo Duterte declared its liberation from the extremist group Maute, #TheGlimpses on The GUIDON looks into the residents’ various efforts to rebuild their beloved city.‬</p>
          <p class="box-credits">by Mariana Gardoce and Tatiana Maligro</p>
        </div>
        </g-link>
      </div>
      <div class="photoessay-box">
        <g-link to="/foundations/">
        <div class="textbox">
          <h6 class="box-category">PHOTO ESSAY</h6>
          <h2 class="box-title">Foundations</h2>
          <p class="box-desc animated fadeIn">It has been more than two years since the liberation of Marawi City from armed conflict, but many displaced Maranaos still find themselves situated in temporary shelters. The recent Mindanao calamities and the prolonged rehabilitation process leave Marawi’s former residents to wonder when they will be able to truly start anew.</p>
          <p class="box-credits">by Jason Mariano and Aldo Santiago</p>
        </div>
        </g-link>
      </div>
    </div>
    <div class="flex-container-2">
      <div class="wtd-box">
      <g-link to="/world-teachers-day/">
        <div class="textbox">
          <h6 class="box-category">ARTICLE</h6>
          <h2 class="box-title">Beyond makeshift classrooms</h2>
          <p class="box-desc animated fadeIn">Despite lacking facilities, determined educators have established makeshift schools so that the displaced youth may find themselves in classrooms once again. But what else can government and non-government agencies provide to ease their plight?</p>
          <p class="box-credits">by Danielle R. Garcia and Alithea C. Soriano</p>
        </div>
        </g-link>
      </div>
      <div class="docu-box">
        <g-link to="/continued-displacement/">
        <div class="textbox">
          <h6 class="box-category">MINI DOCUMENTARY</h6>
          <h2 class="box-title">Kawaraw</h2>
          <p class="box-desc animated fadeIn">Named after the word for bravery in Maranao, Kawaraw tells the stories of Marawi's residents as they face the new battle of rebuilding their beloved city while retaining their cultural identity. Despite the hazy future brought by rehabilitation delays and insufficient relief efforts, residents continue to persist in hopes that they may soon come home.</p>
          <p class="box-credits">by Mariana Gardoce and Tatiana Maligro</p>
        </div>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import animated from "animate.css";
export default {
  name: "CardsSection"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  font-family: "Tiempos Text";
  color: #ffffff;
  text-decoration: none;
}

.the-narratives {
  text-align: center;
  background-image: url(../assets/landing-bg-new.jpg),
    linear-gradient(
      to bottom,
      rgba(252, 254, 255, 1) 0%,
      rgba(252, 254, 255, 0) 60%
    );
    padding-bottom: 40px;
  height: 140%;
  margin: 0;
  background-blend-mode: overlay;
  overflow: auto;
}

.the-narratives-header {
  vertical-align: middle;
  line-height: 35px;
  font-style: normal;
  width: 340px;
  height: 35px;
  font-weight: 500;
  font-size: 18px;
  /* line-height: 22px; */
  margin: 0 auto;
  margin-top: 104px;

  background-color: #1c4480;
}

.flex-container-1 {
  display: flex;
  width: 1112px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 64px;
}

.kf-box {
  /* background-image: url(../assets/keepin-faith-thumbnail.png); */
   background-image: url('../assets/kf-bg.jpg');
  background-size: cover;
  background-position: center 20%;
}

.kf-box,
.photoessay-box {
  width: 313px;
  height: 391px;
}

.bn-box {
  width: 426px;
  height: 391px;
  background-image: url(../assets/marawi-rehab-thumbnail.png);
}

.photoessay-box {
  background-image: url('../assets/TEMP1.jpg');
  background-size: cover;
  background-position: 25%;
}

.flex-container-2 {
  display: flex;
  width: 1112px;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 31px;
}

.wtd-box {
  width: 427px;
  height: 391px;
  background-image: url(../assets/wtd-thumbnail.png);
}
.docu-box {
  width: 655px;
  height: 391px;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  background-position: center bottom;
}

.textbox {
  background: rgba(28, 68, 128, 0.75);
  backdrop-filter: blur(20px);
  position: relative;
  overflow: auto;
  height: 124px;
  top: 267px;
  cursor: pointer;
  transition-duration: 0.7s;
}


.textbox:hover {
  height: 391px;
  top: 0px;
  transition-duration: 0.7s;
}

.textbox:hover .box-desc{
  display: block;
}

.box-desc{
  padding-top: 15px;
  color: #F6F6F6;
  font-weight: normal;
  line-height: 18px;
  width: 80%;
  display: none;
  padding-bottom: 10px;
}
.box-category,
.box-title,
.box-credits,
.box-desc {
  text-align: left;
  padding-left: 25px;
  font-size: 12px;
line-height: 18px;
}
.box-category {
  color: #5597fb;
  font-size: 10px;
  line-height: 12px;
  margin-top: 20px;
}

.box-title {
  margin-top: 6px;
  font-size: 21px;
  line-height: 25px;
  font-family: 'Tiempos Bold';
}

.box-credits {
  margin-top: 10.54px;
  font-size: 12px;
  line-height: 14px;
}

@media screen and (max-device-width: 420px) {
  .the-narratives {
    width: 100%;
    height: 100%;
    background-image: url(../assets/landing-bg-new.jpg),
    linear-gradient(
      rgba(252, 254, 255, 1) 0%,
      rgba(252, 254, 255, 0.85) 60%
    );
    margin-top: 15px;

  }

.the-narratives-header{
  /* width: 70vw; */
  width: 276px;
  height: 20px;
  vertical-align: middle;
  padding-top:7px;
  margin-top: 25px;
  font-size: 13px;
  line-height: 16px;
}
  

  .flex-container-1,
  .flex-container-2 {
    display: block;
    width: 100vw;
  }

  .textbox {
    width: 276px;
    height: 132px;
  }

.textbox {
  height: 399px;
  top: 0px;
}

.box-desc{
  display: block;
}
  .textbox *{
      position: relative;
      width: 85%
  }

  .textbox>h2{
      font-size: 18px;
  }

  .textbox>h6{
      font-size: 9px;
      font-weight: 10
  }

  .textbox>p{
      font-size: 10px;
  }

  .kf-box,
  .photoessay-box,
  .bn-box,
  .wtd-box,
  .docu-box {
    width: 276px;
    height: 399px;
    text-align: center;
    margin: 0 auto;
    margin-top: 38px;
  }

  .docu-box{
      margin-bottom: 60px;
  }


}
</style>