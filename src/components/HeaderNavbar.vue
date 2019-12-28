<template>
    <div id="header-container">
        <div id="header-flexbox">
        <div class="left-side">
            <!-- <g-image src="../assets/GDN_Horizontal-whitetext.png" class="logo"/> -->
            <g-image src="../assets/GDN_Horizontal-whitetext.svg" class="logo"/>
            <div class="hr"></div>
            <span class="page-title">{{title}}</span>
        </div>
        <div class="right-side">
            <g-image src="../assets/left-arrow.svg" class="arrow" />
            <span class="prev">Prev</span>
            <div class="hr-2"></div>
            <span class="next">Next</span>
            <g-image src="../assets/left-arrow.svg" class="arrow right-arrow" />
        </div>
        </div>

        <div id="header-flexbox-mobile">
            <div class="flexbox-mobile">
            <g-image id="burger" src="../assets/burger.svg" @click="toggleSidebar"></g-image>
            <g-image src="../assets/GDN_Horizontal-whitetext.png" class="logo"/>
            </div>
        </div>

        <div id="sidebar">
            <h1 class="title">{{title}}</h1>
        
            <div class="section section-1"><g-link to="/keeping-faith/">Keeping Faith</g-link></div>
            <hr>
        
            <div class="section"><g-link to="/rehabilitation-efforts/">Marawi's Rehabilitation Efforts</g-link></div>
       
            <div class="section"> <g-link to="/foundations/">Foundations </g-link></div>
        
            <div class="section"><g-link to="/world-teachers-day/">Beyond makeshift classrooms</g-link></div>
            <hr>
        
            <div class="section"><g-link to="/vo/">The Maranao's Continued Displacement</g-link></div>
            <g-image src="../assets/GDN_Horizontal-whitetext.png" class="logo"/>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderNavbar',
    data(){
        return {
        }

    },
    props: ['title'],
    methods: {
        toggleSidebar: function(){
            var sidebar = document.getElementById("sidebar").style.display;
            sidebar = "none" ? document.getElementById("sidebar").style.display = "block" : document.getElementById("sidebar").style.display = "none"         
            console.log('clicked');
        }
    }
}
</script>

<style scoped>
@font-face{
	font-family: 'Tiempos Bold';
	src: url("../assets/Tiempos Text - Semibold.otf");
}

@font-face{
	font-family: 'Tiempos Text';
	src: url("../assets/Tiempos Text - Regular.otf");
}

*{
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
text-decoration: none;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  color: #ffffff;

}
.logo{
    width: 200px;
    height: 26px;
}

.page-title{
    font-size: 14px;
    font-family: 'Tiempos Text'
}
#header-flexbox-mobile>*{
    display: none;
}

#sidebar{
    display: none;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 75vw;
    background: #1C4480;
    color: #FFFDF9;
    font-family: 'Tiempos Bold';
    z-index: 3;
}


#sidebar>div{
    font-family: 'Tiempos Text';
    font-size: 16px;
line-height: 19px;
font-style: normal;
font-weight: normal;
}

#sidebar>h1{
    
    font-weight: bold;
font-size: 18px;
line-height: 22px;
padding-top: 32px;
}


#sidebar>*{
    padding-left: 32px;
}
    .section{
    padding-top: 20px;
    }

.section-1{
padding-top: 40px;
}

hr{
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top:20px;

}

#sidebar>.logo{
    position: absolute;
    bottom: 32px;
}


#header-container{
    /* height: 70px; */
    height: 5vw;
    width: 100vw;
    background: #1C4480;
}

#header-flexbox{
width: 90vw;
margin-left: 3vw;
padding-top: 19px;
display: flex;
justify-content: space-between;
align-items: center;
    font-family: Chivo;

}

.left-side{
    width: 40vw;
    height: 1vw;
}

.right-side{
    width: 200px
}

.left-side, .right-side{
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.hr{
    border: 1px solid rgba(246, 246, 246, 0.3);
    transform: rotate(90deg);
    width: 5vw;
}

.hr-2{
    border: 0.5px solid white;
    transform: rotate(90deg);
    width: 30px;
}

.right-arrow{
    transform: rotate(180deg)
}

.arrow{
    height: 12px;
    width: 10px;
}

.next, .prev, .arrow{
    cursor: pointer;
}

@media screen and (max-device-width: 420px) {

#header-container{
    height: 42px;
    position: fixed;
    z-index: 2;
}
#header-flexbox{
    display: none
}
#header-flexbox-mobile>*{
    display: flex;
    width: 160px;
    padding-top:15px;
    justify-content: space-between;
    padding-left: 20px;

}

#burger{
    width: 18px;
    height: 12px;
}

.logo{
    width: 123px;
    height: 15px;
}
}

</style>