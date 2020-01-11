<template>
    <div class="footer">
                <g-image class="gdn-horizontal" src="../assets/theguidonlogo90_GDN Logo Horizontal - White 1.svg" />
                <p class="footer-content">
                    Marawi Special Report 2019
                    <br>
                Written by Alithea C. Soriano and Danielle R. Garcia
                <br>
                Interactive by Alannah Mitra, Bea Martin, Bea Sison, Cobbie Quintos, Davin Cuaso, Keith Bartido, Prezil Ong, and Zekie Ordoveza
                <br>
                Photos by Aldo Santiago and Jason Mariano
                <br>
                Videos by Mariana Gardoce, Tatiana Maligro, Jason Mariano, and Aldo Santiago 
                <br>
                Special thanks to the Asian Center for Journalism
                </p>

        </div>
</template>

<script>
export default {
    name: "CardsSection"
}
</script>

<style scoped>
@font-face{
	font-family: 'Tiempos Text';
	src: url("../assets/Tiempos Text - Regular.otf");
}

* {
    font-family: 'Tiempos Text';
    color: white;

}
.footer{
    height: 60vh;
    background-color: #1C4480;
    font-size: 14px;
    line-height: 35px;
    font-size: 14px;
}

.gdn-horizontal
{
    padding-top: 4vh;
    width: 276px;
    /* height: 30px; */
    margin-left: 82px;
    padding-bottom:20px;

}

.footer-content{
    padding-top: 1vh;
    margin-left: 87px;

}

@media screen and (max-device-width: 420px) {
.footer{
    height: 217px;
    font-size: 9px;
    font-weight: 10;

}

.gdn-horizontal
{
    width:147px;
    margin-left: 27px;
    /* height: 20px; */
}
.footer-content{
    margin-top: -10px;
    margin-left: 30px;
    width: 80vw;
    line-height: 170%;
}


}

</style>