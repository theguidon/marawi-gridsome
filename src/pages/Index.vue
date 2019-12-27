<template>
<div>
        <div class="hdr">
            <div class="animated fadeInDown header-logo delay-1s"><g-image src="../assets/logo-clear.png"/></div>
            <h1 class="animated fadeInDown slow delay-1s">Catching Light</h1>
            <h3 class="animated fadeInDown slow delay-1s">The Faces of Marawi</h3>
            <hr class="animated fadeInDown slow delay-1s">
            <h5 class="animated fadeInDown slow delay-1s">Published November 2019</h5>
            <div class="animated delay-3s scroll-animation-div">
                <h6 class="animated delay-1s scroll-down-top">Scroll Down</h6>
                <g-image class="animated delay-1s scroll-triangle" src="../assets/scroll-down-triangle.svg" />
            </div>
        </div>
        <div class="main-text">
            <p class="p1">On May 23, 2017, terrorist affiliates of the Islamic State laid siege to the Islamic City of Marawi, the provincial capital of Lanao del Sur and one of the most important urban centers in Muslim Mindanao. The terrorists spared none in their conquest of the city, killing wantonly and taking freely from the residents. Christians and Muslims alike were the victims of their cruel and inhumane actions.</p>
            <p class="p2">But gradually, after months of fighting between government forces and the insurgents, Secretary of Defense Delfin Lorenzana declared the end of combat operations on October 23, 2017, and the rehabilitation program could begin in earnest.</p>
            <p class="p3">The GUIDON looks into the situation in Marawi a year since the fated attack. The stories presented in this hub are the lived experiences of people affected by the siege and those trying to build back better from the carnage.</p>
        </div>
        <CardsSection>
            <div slot="explore-div">
                <h6 class="explore scroll-down-top2">Explore the Narratives</h6>
                <g-image class="scroll-triangle scroll-down-top" src="../assets/scroll-down-triangle-blue.svg" />
            </div>
        </CardsSection>
        <Footer />
        <div class=""></div>
    </div>
</template>

<script>
import animated from 'animate.css';
import CardsSection from '~/components/CardsSection.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Landing',
  metaInfo: {
    title: 'Marawi Interactives',
    meta: [
        {charset: 'UTF=8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        {httpEquiv: 'X-UA-Compatible', content: 'ie=edge'}
    ],
  },
  components: {
      CardsSection,
      Footer
  }
}
 
// $(document).ready(function () {
//     function isScrolledIntoView(elem)
//     {
//         var docViewTop = $(window).scrollTop();
//         var docViewBottom = docViewTop + $(window).height();
    
//         var elemTop = $(elem).offset().top;
//         var elemBottom = elemTop + $(elem).height();
    
//         return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//     }
    
//     var item = document.getElementsByClassName("p1");
//     if (isScrolledIntoView(item)){
//         console.log('visible');
//     }

//     $(".scroll-triangle").click(function (e) { 
//         e.preventDefault();
//         $(".p1")[0].scrollIntoView()
//     });

//     var comeFromTop = true;
//     var aboveNarratives = true;
//     var secondScrollPos = $(".scroll-down-top2").offset().top - 450;
//     $(window).scroll(function (event) {
//         console.log(`secondScrollPos: ${secondScrollPos}`);
//         var scroll = $(window).scrollTop();
//         console.log(`scroll: ${scroll}`);
//         // Do something
//         if (scroll >= 232 && comeFromTop){
//             $([document.documentElement, document.body]).animate({
//                 scrollTop: $(".main-text").offset().top - 70
//             }, 2000);
//             comeFromTop = false;
//             console.log('set comeFromTop to false');
//             $(".p1, .p2, .p3").addClass("animated fadeInDown delay-2s")

//         } else if (scroll < 232 && !comeFromTop){
//             comeFromTop = true;
//             console.log('set comeFromTop to true');
//         } else if (scroll >= secondScrollPos && aboveNarratives){
//             aboveNarratives = false;
//             $([document.documentElement, document.body]).animate({
//                 scrollTop: $(".the-narratives-header").offset().top - 70
//             }, 2000);
//         } else if (scroll < secondScrollPos && !aboveNarratives){
//             aboveNarratives = true;
//             console.log('aboveNarratives set to true')
//         }
//     });
//     console.log(window.pageYOffset);
// });
</script>

<style scoped>
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
    height: 100vh;
    /* background-image: url(../assets/bg.png),          linear-gradient(to top, #000417 0%, rgba(196, 196, 196, 0) 250.29%); */
    background-image: url(../assets/landing-bg-new.jpg), linear-gradient(to top, rgba(252, 254, 255, 1) 0%, rgba(252, 254, 255, 0) 60%);
    /* mix-blend-mode: lighten; */
    background-blend-mode: overlay;
    text-align: center;
    padding-top: 128px;
    margin-bottom: 0px;
    /* background-size: cover; */
    background-position: top left;
    
}

.header-logo{
    animation-name: fadeInDown;
    animation-duration: 9s;
}

.bounce{
    animation-iteration-count: infinite;
    animation-duration: 4s;
}

.header-logo{
     margin-top: 128px;
}
.header-logo,
h1,
h3, 
hr, 
h5,
h6{
        margin: auto;
        width: 50%;
}
h1{
    font-size: 64px;
    line-height: 77px;
    width: 485px;
    font-style: italic;
    margin-top: 64px;
    font-family: 'Tiempos Text - Bold Italic'
}

h3{
    margin-top: 8px;
    font-family: 'Tiempos Text - Regular';
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
    height: 482px;
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




.scroll-down-top2,
.scroll-triangle-2{
    color: #1C4480;
}

@media screen and (max-device-width: 420px) 
{

 

    .main-text{
        height: 1000px;
    }
    .hdr{
        height: 690px;
        padding-top: 66px;
    background-image: url(../assets/mobile-landing-hdr-bg.png), linear-gradient(to top, rgba(252, 254, 255, 1) 0%, rgba(252, 254, 255, 0) 60%);
        background-position: 80% 0%;
    }
    .hdr>h1{
        width: 80vw;
        font-size: 36px;
        margin-top: 0px;
        padding-top: 25px;
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
