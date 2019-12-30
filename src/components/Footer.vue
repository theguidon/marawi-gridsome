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
    height: 407px;
    background-color: #1C4480;
    font-size: 14px;
    line-height: 35px;
    font-size: 14px;
}

.gdn-horizontal
{
    margin-top: 60px;
    width: 276px;
    height: 45px;
}

.footer-content{
    padding-top: 38px;
}

.gdn-horizontal{
    margin-left: 60px;
}
.footer-content{
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
    margin-top: 34px;
    width:147px;
    height: 20px;
}
.gdn-horizontal{
    margin-left: 5px;
}
.footer-content{
    margin-left: 30px;
}

.footer-content{
    padding-top: 13px;
    width: 80vw;
    line-height: 170%;
}

}

</style>