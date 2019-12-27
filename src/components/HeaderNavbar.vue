<template>
    <div id="header-container">
        <div id="header-flexbox">
        <div class="left-side">
            <g-image src="../assets/GDN_Horizontal-whitetext.png" class="logo"/>
            <div class="hr"></div>
            <span>Now viewing: Landing Page</span>
        </div>
        <div class="right-side">
            <g-image src="../assets/left-arrow.svg" class="arrow" />
            <span class="prev">Prev</span>
            <div class="hr-2"></div>
            <span class="next">Next</span>
            <g-image src="../assets/left-arrow.svg" class="arrow right-arrow" />
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderNavbar'
}
</script>

<style scoped>

*{
    font-family: Chivo;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
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
#header-container{
    height: 70px;
    background: #1C4480;
}

#header-flexbox{
width: 90vw;
margin-left: 3vw;
padding-top: 19px;
display: flex;
justify-content: space-between;
align-items: center;
}

.left-side{
    width: 430px;
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
    width: 70px;
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
</style>