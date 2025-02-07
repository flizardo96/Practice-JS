/**const palabra = "ejemplo";
const palabra2 = "ejemplo";
palabra === palabra2;

const numero = 2;
const numero2 = 2;
numero === numero2;

let listaDeNumeros = [1, 2, 3];
let listaDeNumeros2 = listaDeNumeros;
listaDeNumeros = [1, 2];

listaDeNumeros === listaDeNumeros2;*/

/*let x = 1;
x = 25;

console.log(x);*/

/*let o = { x: 1, y: 2 };
for (const [name, value] of Object.entries(o)) {
  console.log(name, value);}*/

//const { nombre: PersonaNombre, apellido } = { nombre: "francisco", apellido: "lizardo" };

/*const frutas = ["manzana", "pera", "limon"];
const [nombre] = ["francisco", "lizardo"];
const processedArry = nombre.split("");

console.log(processedArry);
console.log(processedArry.join(","));
*/
/*function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const frezze = "Shark Bait!";
  const swim = "Alive!";

  let stime = sharkDistance / sharkSpeed;
  let mytime = pontoonDistance / youSpeed;

  if (dolphin) {
    stime = stime / 2;
  }

  //sharkSpeed = 1.5/0.1;
  //youSpeed = 1/0.1;
  //dolphin = false;
  //sharkDistance = 7;
  //pontoonDistance =4;

  // to win myspped  and distance bettween
 /* console.log({
    pontoonDistance,
    sharkDistance,
    youSpeed,
    sharkSpeed,
    dolphin,
    stime,
    mytime,
  });
  if (stime > mytime) {
    console.log(swim);
    return swim;
  } else {
    console.log(frezze);
    return frezze;
  }
}

shark(12, 50, 4, 8, true);
shark(7, 55, 4, 16, true);
shark(24, 0, 4, 8, true);*/

/*TODO: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/

function duplicateEncode(word) {
  const array = word.split("");
  const processedArray = [];
  for (let i = 0; i < array.length; i++) {
    const filtered = array.filter((element) => {
      return element === array[i];
    });

    filtered;

    if (filtered.length > 1) {
      processedArray.push(")");
    } else {
      processedArray.push("(");
    }
  }
  const str = processedArray.join("");
  console.log(str);
}
