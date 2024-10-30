const hello = (name, origin = bandung) => `Hallo ! Nama saya ${name}. Saya tinggal di${origin}`;

const rahmat = hello('Rahmat', 'Bandung');

console.log(hello);
console.log(rahmat);

function noReturn() {
    let x = 10;
  }
  
  let result = noReturn();