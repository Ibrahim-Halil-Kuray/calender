//miladi tarihi hicri tarihe cevirecek fonksiyonu yazalim


function miladiToHicri(pdate) {

   let fark = (pdate - 622) * 365;
   let hicriYil = Math.ceil(fark / 354);
   console.log(`yazilan miladi tarihin hicri karsiligi = ${hicriYil}`)
}
// fonksiyonumuzu export edelim.

module.exports = miladiToHicri;