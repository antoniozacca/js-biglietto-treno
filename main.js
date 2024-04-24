'use strict'
const chilometriPercorsi= prompt ("Quanti km vuoi percorrere?");
console.log(chilometriPercorsi);

const etaPasseggero= prompt ("Quanti anni hai?");
console.log(etaPasseggero);

let prezzo= chilometriPercorsi * 0.21;
if (etaPasseggero<18){
    prezzo= prezzo - [(20/100)*prezzo];
}else if (etaPasseggero>65) {
    prezzo= prezzo - [(40/100)*prezzo];
} 
prezzo= prezzo.toFixed(2)
console.log(prezzo)