let mesaj = (`
migrosa hoşgeldiniz money kartınız var mı? 
1 - Evet 
2 - Hayır 
`)


const urunler = [
    {
        urunIsmi: "süt",
        fiyat: 25
    },
    {
        urunIsmi: "bebek bezi",
        fiyat: 200
    },
    {
        urunIsmi: "kuşbaşı",
        fiyat: 250
    },
]

let sonuc = confirm(mesaj)
let odenecekTutar;

if (sonuc) {
    let adi = prompt("adınızı giriniz :")
    let soyadi = prompt("soyadınızı giriniz :")

    const musteri = new Musteri(adi, soyadi, sonuc, urunler);
    let odenecekTutar = musteri.hesapla()

    alert(`
    Müşteri Bilgileri : ${musteri.getAdi()} ${musteri.getSoyadi()}
    Ödenecek tutar : ${odenecekTutar}
    `)

} else {
const musteri = new Musteri(null, null, sonuc, urunler);
odenecekTutar = musteri.hesapla()
alert(`Ödenecekler : ${odenecekTutar}`)

}
