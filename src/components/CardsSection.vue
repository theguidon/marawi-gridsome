<template>
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
</template>

<script>
export default {
    name: 'CardsSection'
}
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
</style>