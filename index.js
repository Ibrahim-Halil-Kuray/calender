/** Kriterler:
=======================
- Analiz bölümünün bulunmasi (user interaction ve technical details)
- Programin düzgün calismasi
- Kod içine yorumların eklenmesi
- Kod makyajina dikkat edilmesi
- require/module.exports ikilisini code ihrac ve ithalatinda kullanilmasi
**
gorevi basamklara ayirisak:
 -miladi tarihi hicri tarihe cevirecek ir fonksiyon yazalim
 -ayri  bir dosyada hicri tarihi miladi tarihe cevirecek bir fonksiyon yazalim.
 -daha sonra exports ve requier yontemleri uygulamayi ana bir dosyada birlestirelim.
 */


const miladiyeDonusturme = require("./miladi-converter");
const hicriyiDonusturme = require("./hicri-converter");

miladiyeDonusturme(2000);
hicriyiDonusturme(2000);