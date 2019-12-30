<template>
  <PageLayout title="Marawi's Rehabilitation Efforts" prev="/keeping-faith/" next="/foundations/">
    <div class="landing-container">
      <h1 class="animated slow scroll-animation-div landing-head">Marawi's Rehabilitation Efforts</h1>
      <h3
        class="animated delay-1s fast scroll-animation-div landing-sub"
      >As Marawi City commemorates the second year since President Rodrigo Duterte declared its liberation from the extremist group Maute, #TheGlimpses on The GUIDON looks into the residents’ various efforts to rebuild their beloved city.‬</h3>
      <h2
        class="animated delay-1s fast scroll-animation-div landing-credits"
      >By Patricia D. Villoria, Tatiana Maligro, and Danielle R. Garcia</h2>
      <div id="button" class="animated delay-2s scroll-animation-div">
        <h6 id="button" class="animated delay-1s slow scroll-down-top">WATCH NOW</h6>
        <g-image
          id="button"
          class="animated delay-1s slow scroll-triangle"
          src="../assets/scroll-down-triangle.svg"
        />
      </div>
    </div>
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/b-sGBVGH29E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="text-container">
      <h1 class="animated bottom-animation-div bottom-text wow">
        ‪”Islam is peace, so I don’t think kailangan nating ilagay sa isip natin yung Muslims are terrorists. Terrorists are bad people, not Muslims.‬”
      </h1>
    </div>
    <CardsSection />
  </PageLayout>
</template>

<script>
import CardsSection from "~/components/CardsSection";
export default {
  name: "RehabilitationEfforts",
  metaInfo: {
    title: "Marawi's Rehabilitation Efforts"
  },
  components: {
    CardsSection
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Chivo&display=swap");
@font-face {
  font-family: "Tiempos Text";
  src: url("../assets/Tiempos Text - Regular.otf");
}

@font-face {
  font-family: "Tiempos Bold";
  src: url("../assets/Tiempos Text - Semibold.otf");
}

@font-face {
  font-family: "Tiempos Med";
  src: url("../assets/Tiempos Text - Medium.otf");
}

body {
  font-family: "Tiempos Text";
  background-color: black;
}
h5,
h6 {
  margin: auto;
  width: 50%;
}

h6 {
  font-family: "Chivo", sans-serif;
  color: #ffffff;
}

iframe {
  width: 80vw;
  height: 90vh;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.scroll-down-top {
  position: relative;
  margin-top: 118px;
  font-size: 14px;
  line-height: 1px;
  text-align: center;
}

.scroll-triangle {
  margin-top: 18px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.scroll-animation-div {
  animation: fadeInDown;
  animation-duration: 2s;
}

.scroll-down-top,
.scroll-triangle,
.explore {
  -webkit-animation-name: scroll-animation;
  -moz-animation-name: scroll-animation;
  -o-animation-name: scroll-animation;
  animation-name: scroll-animation;

  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  -webkit-animation-duration: 0.8s;
  -moz-animation-duration: 0.8s;
  -o-animation-duration: 0.8s;
  animation-duration: 0.8s;

  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  -o-animation-delay: 2s;
  animation-delay: 2s;
}

@keyframes scroll-animation {
  from {
    top: 0px;
  }
  to {
    top: 18px;
  }
}

.landing-container {
  height: 100vh;
  background: linear-gradient(
      0deg,
      #000000 0.05%,
      rgba(8, 8, 8, 0.885114) 22.53%,
      rgba(12, 12, 12, 0.764107) 40.97%,
      rgba(7, 7, 7, 0.665789) 45.26%,
      rgba(52, 52, 52, 0.513483) 60.65%,
      rgba(90, 91, 94, 0.346275) 82.36%,
      rgba(111, 111, 114, 0.205556) 90.42%,
      rgba(126, 126, 129, 0.112842) 97.68%,
      rgba(196, 196, 196, 0) 100%
    ),
    url(../assets/bg.jpg) center 80%;
}

.bg {
  background-image: url(../assets/bg.png);
  filter: contrast(0.8) brightness(1.1);
  transform: scale(1.72);
  background-repeat: no-repeat no-repeat;
  background-attachment: local;
  background-size: 100% 100%;
  max-width: 100%;
  height: auto;
  width: auto\9;
  object-position: 100% -8em;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: -3;
  background-color: #ffffff;
}

#fade g-image.load {
  opacity: 1;
}

.landing-bg {
  display: block;
  /* position: absolute; */
  width: 100%;
  height: 101%;
  background-color: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    0deg,
    #000000 0.05%,
    rgba(8, 8, 8, 0.885114) 22.53%,
    rgba(12, 12, 12, 0.764107) 40.97%,
    rgba(7, 7, 7, 0.665789) 45.26%,
    rgba(52, 52, 52, 0.513483) 60.65%,
    rgba(90, 91, 94, 0.346275) 82.36%,
    rgba(111, 111, 114, 0.205556) 90.42%,
    rgba(126, 126, 129, 0.112842) 97.68%,
    rgba(196, 196, 196, 0) 100%
  );
  background-blend-mode: darken;
  border: 1px solid #000000;
  box-sizing: border-box;
}

.landing-head {
  padding-top: 200px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-family: "Tiempos Bold";
  z-index: 1;
  font-size: 48px;
  margin: 0;
  line-height: 58px;
  color: #ffffff;
}

.landing-sub {
  font-family: "Tiempos Text";
  font-size: 18px;
  width: 70vw;
  line-height: 30px;
  margin: 0 auto;
  font-style: normal;
  font-weight: normal;
  padding-top: 20px;
  text-align: center;
  color: #ffffff;
}

.landing-credits {
  padding-top: 1em;
  font-family: "Chivo";
  font-style: normal;
  font-weight: normal;
  text-align: center;
  line-height: 19px;
  font-size: 16px;
  color: #ffffff;
}

.video-container {
  height: 100vh;
  text-align: center;
  background-color: black;
}
.video {
  position: relative;
  height: 710px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 83%;
  height: 83%;
}

.text-container {
  background-color: #ffffff;
  top: 0;
  left: 0;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
  position: relative;
  padding-top: 8em;
}

.text-container>h1{
	text-align: center;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 80vw;
}

.bottom-text {
  font-family: 'Tiempos Med';
  font-style: italic;
  font-weight: 500;
  font-size: 36px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  display: block;
  color: #1c4480;
}

.bottom-animation-div {
  animation: fadeIn;
  animation-duration: 3s;
}

@media screen and (max-device-width: 420px) {
  iframe {
    height: 20vh;
  }

  .landing-head {
    font-size: 28px;
    line-height: 34px;
  }

  .landing-sub {
    height: 160px;
    line-height: 25px;
  }

  .landing-credits{
    height: 76px;
    line-height: 19px;
  }

  .landing-sub, .landing-credits{
    font-size: 16px;
  }
  .landing-head,
  .landing-sub,
  .landing-credits {
    width: 85vw;
    margin: 0 auto;
  }

  .video-container{
	  height: 80vh;
  }

.text-container{
	height: 100vh;
}
.text-container>h1{
	
	width: 80vw;
	margin: 0 auto;
	height: 101px;
	font-size: 26px;
	line-height: 42px;
}
}
</style>