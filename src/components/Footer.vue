<template>
    <div class="footer">
                <g-image class="gdn-horizontal" src="../assets/GDN_Horizontal-whitetext.png" />
                <p class="footer-content">
                    ABOUT THE INTERACTIVE
                    <br>
                    An immersive journalism project by The GUIDON in 2019
                    <br>
                Introduction written by [Name]
                <br>
                Interactive by Alannah Mitra, Bea Martin, Bea Sison, Cobbie Quintos, Davin Cuaso, Keith Bartido, Prezil Ong, and Zekie Ordoveza
                <br>
                Photos by Aldo Santiago and Jason Mariano
                <br>
                Videos by Patricia D. Villoria, Tatiana Maligro, and Danielle R. Garcia </p>

        </div>
</template>

<script>
export default {
    name: "CardsSection"
}
</script>

<style scoped>
*{
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
}

.footer-content{
    padding-top: 38px;
}

.gdn-horizontal, .footer-content{
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
    height: 17px;
}
.gdn-horizontal, .footer-content{
    margin-left: 30px;
}

.footer-content{
    padding-top: 13px;
    width: 80vw;
    line-height: 170%;
}

}

</style>