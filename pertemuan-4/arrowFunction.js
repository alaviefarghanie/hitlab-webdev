const luasPersegi = (sisi) => sisi * sisi;

console.log(luasPersegi(10))

console.log('--------');

const sapa = (nama) => `Halo, ${nama}`;

console.log(sapa("Alavie"));  // Output: Halo, Alavie!

console.log('--------');

const kelililingLingkaran = (jarijari) => 2 * 22/7 * jarijari;
console.log(kelililingLingkaran)
console.log(kelililingLingkaran(7))

console.log('--------');
const cekPositif = (angka) => angka >= 0;
console.log(cekPositif)
console.log(cekPositif(9))
console.log("ini adalah angka positif", cekPositif(0))