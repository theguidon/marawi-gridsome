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
        <div class="the-narratives">
                <h6 class="explore scroll-down-top2">Explore the Narratives</h6>
                <g-image class="scroll-triangle scroll-down-top" src="../assets/scroll-down-triangle-blue.svg" />
                <h2 class="the-narratives-header">STORIES FROM THE ISLAMIC CITY</h2>
                <div class="flex-container-1">
                    <div class=" animated fadeIn slow kf-box">
                        <div class="textbox">
                            <h6 class="box-category">ARTICLE</h6>
                            <h2 class="box-title">Keeping Faith</h2>
                            <p class="box-credits">By: Danielle R. Garcia and Alithea C. Soriano</p>
                        </div>
                    </div>
                    <div class="bn-box">
                            <div class="textbox">
                                    <h6 class="box-category">BROADCAST NEWS</h6>
                                    <h2 class="box-title">Marawi’s Rehabilitation Efforts</h2>
                                    <p class="box-credits">By: Patricia D. Villoria, Tatiana Maligro, and Danielle R. Garcia</p>
                            </div>
                    </div>
                    <div class="photoessay-box">
                            <div class="textbox">
                                    <h6 class="box-category">PHOTOESSAY</h6>
                                    <h2 class="box-title">Foundations</h2>
                                    <p class="box-credits">By: Jason Mariano and Aldo Santiago</p>
                            </div>
                    </div>
                </div>
                <div class="flex-container-2">
                    <div class="wtd-box">
                            <div class="textbox">
                                    <h6 class="box-category">ARTICLE</h6>
                                    <h2 class="box-title">World Teacher's Day</h2>
                                    <p class="box-credits">By: Danielle R. Garcia and Alithea C. Soriano</p>
                            </div>
                    </div>
                    <div class="docu-box">
                            <div class="textbox">
                                    <h6 class="box-category">MINI DOCUMENTARY</h6>
                                    <h2 class="box-title">The Maranao’s continued displacement</h2>
                                    <p class="box-credits">By: Patricia D. Villoria, Tatiana Maligro, and Danielle R. Garcia</p>
                            </div>
                    </div>
                </div>
        </div>
        <div class="footer">
                <!-- <div class="footer-content"> -->
                <g-image class="gdn-horizontal" src="../assets/GDN_Horizontal-whitetext.png" />
                <p class="first-footer-sent">ABOUT THE INTERACTIVE</p>
                <p class="footer-content">An immersive journalism project by The GUIDON in 2019</p>
                <p class="footer-content">Introduction written by [Name]</p>
                <p class="footer-content">Interactive by Alannah Mitra, Bea Martin, Bea Sison, Cobbie Quintos, Davin Cuaso, Keith Bartido, Prezil Ong, and Zekie Ordoveza</p>
                <p class="footer-content">Photos by Aldo Santiago and Jason Mariano</p>
                <p class="footer-content">Videos by Patricia D. Villoria, Tatiana Maligro, and Danielle R. Garcia </p>


            <!-- </div> -->
        </div>
        <div class=""></div>
    </div>
</template>

<script>
import animated from 'animate.css';

export default {
  name: 'Landing',
  metaInfo: {
    title: 'Marawi Interactives',
    meta: [
        {charset: 'UTF=8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        {httpEquiv: 'X-UA-Compatible', content: 'ie=edge'}
    ],
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

.the-narratives{
    text-align: center;
    /* background-image: url(../assets/bg-2.png), linear-gradient(to bottom, #000417 0%, rgba(196, 196, 196, 0) 194.29%);*/
    /* background-image: url(../assets/lower-bg-2.png), linear-gradient(to bottom, #FFFFFF, rgba(255, 255, 245, 0.99) 20%); */
    background-image: url(../assets/landing-bg-new.jpg), linear-gradient(to bottom, rgba(252, 254, 255, 1) 0%, rgba(252, 254, 255, 0) 60%);
    /* mix-blend-mode: lighten; */
     
    height: 1324px;
    margin: 0;
    background-blend-mode: overlay;
    margin-top: -34px;
    overflow: auto;
}

.explore{
    position: relative;
    margin-top: 100px;
    width: 80%;
    text-align: center;
}

.the-narratives-header{
    vertical-align: middle;
line-height: 35px;  
    font-style: normal;
    width: 340px;
    height: 35px;
    vertical-align: middle;
    font-weight: 500;
    font-size: 18px;
    /* line-height: 22px; */
    margin: 0 auto;
    margin-top: 154px;

    background-color:#1C4480;
}

.flex-container-1{
    display: flex;
    width: 1112px;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 64px;
}

.kf-box{
    background-image: url(../assets/keepin-faith-thumbnail.png);
}

.kf-box,
.photoessay-box{
    width: 313px;
    height:391px;
}

.bn-box{
    width: 426px;
    height:391px;
    background-image: url(../assets/marawi-rehab-thumbnail.png);

}

.photoessay-box{
    background-image: url(../assets/photoessay-thumbnail.png);
}

.flex-container-2{
    display: flex;
    width: 1112px;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 31px;
}

.wtd-box{
    width: 427px;
    height: 391px;
    background-image: url(../assets/wtd-thumbnail.png);
}
.docu-box{
    width: 655px;
    height: 391px;
    background-image: url(../assets/mini-docu-thumbnail.png);
}

.textbox{
    background: rgba(28,68,128, 0.75);
    backdrop-filter: blur(20px);
    position: relative;
    overflow: auto;
    height: 124px;
    top: 267px;
    cursor: pointer;
    transition-duration: 0.7s;
}

.textbox:hover{
    height: 391px;
    top: 0px;
    transition-duration: 0.7s;
}

.box-category,
.box-title,
.box-credits{
    text-align: left;
    margin-left: 25px;
}
.box-category{
    color: #5597FB;
    font-size: 10px;
    line-height: 12px;
    margin-top: 20px;
}

.box-title{
    margin-top: 6px;
    font-size: 21px;
line-height: 25px;
}

.box-credits{
    margin-top: 10.54px;
    font-size: 12px;
    line-height: 14px;
    color: #AFAFAF;
}

.footer{
    height: 450px;
    background-color: #1C4480;
    font-size: 14px;
    line-height: 150%;
}

.gdn-horizontal
{
    margin-left: 87px;
    margin-top: 101px;
}

.first-footer-sent{
    margin-top: 48px;
    margin-left: 87px;
}
.footer-content{
    margin-left: 87px;
    margin-top: 10px;
}

.scroll-down-top2,
.scroll-triangle-2{
    color: #1C4480;
}


</style>
