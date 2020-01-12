<template>
    <PageLayout title="The GUIDON Interactive: Marawi" leftSideWidth="width: 450px;" hideNavbar=true>
        <div class="hdr">
            <div class="animated fadeInDown header-logo delay-2s"><g-image src="../assets/03 90th Year Logo (WHITE).svg"/></div>
            <h1 class="animated fadeInDown slow delay-1s">Catching light:</h1>
            <h3 class="animated fadeInDown slow delay-1s">Faces of hope in Marawi City</h3>
            <hr class="animated fadeInDown slow delay-1s">
            <h5 class="animated fadeInDown slow delay-1s">January 2020</h5>
            <div class="animated delay-3s scroll-animation-div">
                <h6 class="animated delay-1s scroll-down-top">SCROLL DOWN</h6>
                <g-image class="animated delay-1s scroll-triangle" src="../assets/scroll-down-triangle.svg" />
            </div>
        </div>
        <div class="main-text">
            <p class="p1">The extremist Maute Group seized control of Marawi City on May 23, 2017. From <a href="https://news.abs-cbn.com/news/05/23/17/look-marawi-city-jail-dansalan-college-on-fire">burning</a> Dansalan College to holding Amai Pakpak Medical Center <a href="https://www.gmanetwork.com/news/news/regions/611834/maute-group-takes-over-marawi-hospital-soldier-hurt-in-firefight/story/">hostage</a>, the Maute Group was determined to carve their own territory and establish an Islamic caliphate. The conflict persisted for five months until the Armed Forces of the Philippines successfully reclaimed the Islamic city on October 17. However, this feat came with devastating consequences on Marawi City and its people.</p>
            <p class="p2">To this day, 127,309 embattled internally <a href="https://news.abs-cbn.com/spotlight/10/16/19/for-ground-zero-idps-in-marawi-theres-no-going-back">displaced</a> Maranaos have yet to make their way back home. Apart from their daily struggle to overcome food and shelter insecurity, sporadic government relief efforts, and insufficient resources for youth education, the internally displaced residents of Marawi face deeply rooted religious discrimination from Filipinos beyond Mindanao. Nonetheless, the internally displaced Maranaos look on with steadfast hope, faith, and perseverance. In spite of news riddled with coverage of military efforts in rebuilding Marawi City, the voices of Marawi’s internally displaced call the Philippine media to turn its head their way.</p>
            <p class="p3">In light of the Marawi siege’s second anniversary and the conclusion of Martial Law in Mindanao, The GUIDON looks into the narratives that illustrate the Maranao’s hopes amidst their ongoing plight. In response to <a href="http://interactive.theguidon.com/2018/05/marawi/#/">Strength and Resolve: Tales of Recovery in the Islamic City</a> and its reportage of Marawi’s condition in 2018, The GUIDON sheds a new light on the residents’ own efforts to reclaim a semblance of normalcy after the siege. </p>
        </div>
        <CardsSection>
            <div slot="explore-div" class="explore-div">
                <h6 class="explore scroll-down-top2">Explore the Narratives</h6>
                <g-image class="scroll-triangle scroll-down-top" src="../assets/scroll-down-triangle-blue.svg" />
            </div>
        </CardsSection>
        </PageLayout>
</template>

<script>
import animated from 'animate.css';
import CardsSection from '~/components/CardsSection.vue'
import thumbnail from '~/assets/TEMP2.jpg'

export default {
  name: 'Landing',
  metaInfo: {
    title: 'Marawi Interactives',
    meta: [
        {charset: 'UTF=8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        {httpEquiv: 'X-UA-Compatible', content: 'ie=edge'},
        {name: 'thumbnail', content: {thumbnail}}
    ],
    link: [
      { rel: 'imageSrc', href: {thumbnail}},
    ]
  },
  components: {
      CardsSection,
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Tiempos Text";
  src: url("../assets/Tiempos Text - Regular.otf");
}

@font-face {
    font-family: "Tiempos Bold Italic";
    src: url("../assets/Tiempos Text - Bold Italic.otf")
}
@font-face {
  font-family: "Tiempos Bold";
  src: url("../assets/Tiempos Text - Semibold.otf");
}
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
    font-family: 'Tiempos Text';
    color: #FFFFFF;
}

.hdr{
   
    margin: 0;
    width: 100vw;
    height: 120vh;
    /* background-image: url(../assets/bg.png),          linear-gradient(to top, #000417 0%, rgba(196, 196, 196, 0) 250.29%); */
    background-image: url('../assets/TEMP2.jpg'), linear-gradient(to top, rgba(252, 254, 255, 1) 0%, rgba(252, 254, 255, 0) 60%);
    /* mix-blend-mode: lighten; */
    background-blend-mode: overlay;
    text-align: center;
    padding-top: 128px;
    margin-bottom: 0px;
    background-size: cover;
    background-position: top center;
    
}


.bounce{
    animation-iteration-count: infinite;
    animation-duration: 4s;
}

.header-logo,
h1,
h3, 
hr, 
h5,
h6{
        margin: 0 auto;
        width: 50%;
}
.header-logo{
    animation-name: fadeInDown;
     margin-top: -80px;
}

h1{
    font-size: 64px;
    line-height: 77px;
    width: 485px;
    margin-top: 64px;
    font-family: "Tiempos Bold Italic";
    /* font-family: 'Tiempos Bold' */
    
}

h3{
    margin-top: 8px;
    font-family: 'Tiempos Text';
    font-size: 24px;
    line-height: 29px;
    font-weight: normal;
}

h5,
h6{
    font-family: 'Chivo', sans-serif;
}
h5{
    font-size: 16px;
    line-height: 19px;
    margin-top: 36px;
    font-weight: lighter;
}
hr{
    border-top:1px solid white;
    width: 30px;
    margin: 0 auto;
    margin-top: 27px;
}

.scroll-down-top{
    position: relative;
    margin-top: 136px;
    font-size: 12px;
    line-height: 14px;
}

.scroll-triangle{
    margin-top: 8px;
    position: relative
}

.scroll-animation-div{
    animation: fadeInDown;
    animation-duration: 2s;
}

.explore{
    position: relative;
    margin-top: 100px;
    width: 80%;
    text-align: center;
}

.scroll-down-top,
.scroll-triangle,
.explore{
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



@keyframes scroll-animation{
    from {top: 0px;}
    to {top: 18px;}
}

.main-text{
    height: 760px;
    z-index: 10;
    margin-top: 102px;
    overflow: visible;
    
}
.p1,
.p2,
.p3{
    color: #1C4480;
    font-size: 16px;
    z-index: 10;
    width: 79%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 200%;
    margin-top: 33px;
}

.p1>a,
.p2>a,
.p3>a{
    color: #007bff;
    text-decoration: none;

}




.scroll-down-top2,
.scroll-triangle-2{
    color: #1C4480;
}

@media screen and (max-device-width: 420px) 
{
    .main-text{
        height: 1600px;
        overflow: scroll;
    }
    .hdr{
        height: 690px;
        padding-top: 150px;
    background-image: url(../assets/Landing-mobile.png);
        background-position: 60% 0%;
    background-size: cover;

    }

  
  .explore-div{
      display: none;
  }
    .hdr>h1{
        width: 80vw;
        font-size: 36px;
        margin-top: 0px;
        padding-top: 25px;
        /* font-family: "Tiempos Text - Bold Italic"; */
    }
    .hdr>h3{
        margin-top: -15px;
    }
    .hdr>h3,
    .hdr>h5{
        font-size: 16px;
        width: 60vw;
    }
    
    .hdr>h6{
        font-size: 12px;
        width: 20vw;
    }

    .hdr>hr{
        margin-top: 60px;
        margin-bottom: 60px;
    }
}
</style>
