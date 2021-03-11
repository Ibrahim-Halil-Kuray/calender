// hicri tarihi miladi tarihe donusturen fonsiyonumuzu olusturalim.

function hicriToMiladi(pDate) {
    fark = (pDate * 354);
    miladiYil = Math.ceil(fark / 365) + 622;
    console.log(`yazilan hicri tarihin miladi karsiligi = ${miladiYil}`)
}

// fonksiyonumuzu export edelim.

module.exports = hicriToMiladi;