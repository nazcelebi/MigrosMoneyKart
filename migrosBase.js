class migrosBase {

    indirimOrani = 30;

    constructor(adi, soyadi, kartVarMi, urunler) {
        this.adi = adi;
        this.soyadi = soyadi;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
    }

    hesapla() {

        let odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) {
            if (this.kartVarMi) {
                  this.urunler.forEach((urun) => {
                odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100)});
            } else {
                  this.urunler.forEach((urun) =>{
                    odenecekTutar += urun.fiyat
                  })
            }
        } else {
            alert("en az 1 tane ürün satın almalısınız")
        }
        return odenecekTutar;
    }


    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }

    getAdi(){
        return this.adi;
    }

    getSoyadi(){
        return this.soyadi;
    }
}