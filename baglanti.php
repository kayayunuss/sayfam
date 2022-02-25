


<?php

$vt_sunucu="file:///home/manu/";
$vt_kullanici="root";
$vt_sifre="";
$vt_adi="coffe";


$baglan=mysqli_connet($vt_sunucu, $vt_kullanici, $vt_sifre, $vt_adi);


if(!$baglan)
{
    die("Veri tabanı bağlantı işlemi başarısız".mysqli_connect_error());

}
else{
    echo "Bağlantı başarılı";
}


?>