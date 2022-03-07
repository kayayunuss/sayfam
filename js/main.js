function asalKontrol(sayi)
{
var kontrol=0;
//döngü kurarak 2 den başlayıp sayıya kadar tek tek bölme işlemi yapıyoruz.
for(i=2; i<sayi; i++)
 {
    if(sayi%i==0)
    {
    kontrol++;
    }
 }
//oluşan kontrol 0 ise asal sayıdır. 0 dan büyük ise asal sayı değildir.
    if(kontrol==0)
    {
    alert('Girilen Sayı Asal Sayıdır... ');
    }
    else
    {
    alert('!!! Girilen Sayı Asal değildir !!!');
    }
 }