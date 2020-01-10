<template>
  <div id="header-container" v-if="!hideNavbar">
    <div id="header-flexbox">
      <div class="left-side">
        <g-link to='/'><g-image src="../assets/theguidonlogo90_GDN Logo Horizontal - White 1.svg" class="logo" /></g-link>
      </div>
      <g-link to="/"><div id="center">Catching Light: Faces of hope in Marawi City</div></g-link>
      <div class="right-side">
        <g-link :to='prev'><g-image src="../assets/left-arrow.svg" class="arrow" /></g-link>
        <g-link :to='prev'><span class="prev">Prev</span></g-link>
        <div class="hr-2"></div>
       <g-link :to='next'><span class="next">Next</span></g-link>
        <g-link :to='next'><g-image src="../assets/left-arrow.svg" class="arrow right-arrow" /></g-link>
      </div>
    </div>

    <div id="header-flexbox-mobile">
      <div id="flexbox-mobile-container">
        <g-image id="burger" src="../assets/burger.svg" @click="toggleSidebar"></g-image>
        <g-link to='/'><g-image src="../assets/theguidonlogo90_GDN Logo Horizontal - White 1.svg" class="logo" /></g-link>
      </div>
    </div>

    <transition 
    name='fade'  
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutLeft"
    key="sidebarKey">
        <div id="sidebar" v-if="showSideBar" v-click-outside="hideSideBar" :duration="{ enter: 500, leave: 800 }">
          <h1 class="title">{{title}}</h1>
    
          <div class="section section-1">
            <g-link to="/keeping-faith/">Keeping Faith</g-link>
          </div>
          <hr />
    
          <div class="section">
            <g-link to="/rehabilitation-efforts/">Marawi's Rehabilitation Efforts</g-link>
          </div>
    
          <div class="section">
            <g-link to="/foundations/">Foundations</g-link>
          </div>
    
          <div class="section">
            <g-link to="/world-teachers-day/">Beyond makeshift classrooms</g-link>
          </div>
          <hr />
    
          <div class="section">
            <g-link to="/continued-displacement/">The Maranao's Continued Displacement</g-link>
          </div>
          <g-image src="../assets/theguidonlogo90_GDN Logo Horizontal - White 1.svg" class="logo logo-sidebar" />
        </div>
    </transition>
      </div>
</template>

<script>
import animated from 'animate.css';
import vClickOutside from 'v-click-outside'

export default {
  name: "HeaderNavbar",
  data() {
    return {
        showSideBar:false,
    };
  },
  props: ['title', 'prev', 'next', 'hideNavbar'],
  methods: {
    toggleSidebar: function() {
    this.showSideBar = !this.showSideBar
      console.log("clicked");
    },

    hideSideBar(event){
        if (this.showSideBar === true){
            this.showSideBar = false
        }
    }
  },
  directives: {
      clickOutside: vClickOutside.directive
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Tiempos Bold";
  src: url("../assets/Tiempos Text - Semibold.otf");
}

@font-face {
  font-family: "Tiempos Text";
  src: url("../assets/Tiempos Text - Regular.otf");
}

* {
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
.logo {
  /* width: 250px; */
  height: 35px;
}
#center:hover{
  color: white;
}
.page-title {
  font-size: 16px;
  padding-top: 5px;
  /* width: 150px; */
  font-family: "Tiempos Text";
  overflow-x: visible;
  overflow-y: visible;
}
#header-flexbox-mobile > * {
  display: none;
}

#flexbox-mobile-container {
  width: 60vw;
  display: none;
  justify-content: space-between;
  margin-bottom: 5px;
  /* align-items: center; */
}
#sidebar {
  display: block;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 75vw;
  background: #1c4480;
  color: #fffdf9;
  font-family: "Tiempos Bold";
  z-index: 3;
}

#sidebar > div {
  font-family: "Tiempos Text";
  font-size: 16px;
  line-height: 19px;
  font-style: normal;
  font-weight: normal;
}

#sidebar > h1 {
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  padding-top: 32px;
}

#sidebar > * {
  padding-left: 32px;
}
.section {
  padding-top: 20px;
}

.section-1 {
  padding-top: 40px;
}

hr {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 20px;
}

#sidebar > .logo {
  position: absolute;
  bottom: 32px;
}

#header-container {
  height: 65px;
  /* height: 5vw; */
  width: 100vw;
  background: #1c4480;
  z-index: 9;
  position: fixed;
}

#header-flexbox {
  width: 90vw;
  margin-left: 3vw;
  padding-top: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Chivo;
}

.left-side {
  width: 300px;
  /* width: 30vw; */
  height: 1vw;
  overflow: visible;
  overflow-x: visible;
}

.right-side {
  width: 200px;
}

.left-side,
.right-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hr-1 {
  border: 1px solid rgba(246, 246, 246, 0.3);
  transform: rotate(90deg);
  width: 67px;
  visibility: hidden;
}

.hr-2 {
  border: 0.5px solid white;
  transform: rotate(90deg);
  width: 30px;
}

.right-arrow {
  transform: rotate(180deg);
}

.arrow {
  height: 12px;
  width: 10px;
}

.next,
.prev,
.arrow {
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active{
    transition: opacity .5s
}
/* .fade-enter,
.fade-leave-to{
    opacity: 0
} */

@media screen and (max-device-width: 420px) {
  #header-container {
    height: 42px;
    position: fixed;
    z-index: 2;
  }
  #header-flexbox {
    display: none;
  }


#flexbox-mobile-container{
    display: flex;
}
  #header-flexbox-mobile > * {
    display: flex;
    width: 160px;
    padding-top: 15px;
    justify-content: space-between;
    padding-left: 20px;
  }

  #burger {
    width: 18px;
    height: 12px;
  }

  .logo {
    position: relative;
  bottom: 7px;
  left: 10px;
  margin-left: -20px;
  width: 115px;
  height:30px;
  }

  .logo-sidebar{
width: 180px;
    height: 122px;
  }
}
</style>