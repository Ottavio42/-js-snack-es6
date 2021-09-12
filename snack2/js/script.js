
const squadre = [

    {
        nome: "Salernitana",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Spezia",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Samp",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Torino",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0,
    }
];

let randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;


for( let i = 0; i < squadre.length; i++ ) {
   
    if( squadre[i].punti <= 0 ) {
        squadre[i].punti = randomNumbers(1, 100);
    }
    
    if( squadre[i].falli <= 0 ) {
        squadre[i].falli = randomNumbers(1, 40);
    }
}

let narray = [];

for( let i = 0; i < squadre.length; i++ ) {
    let squadra = {};
    const {nome, falli} = squadre[i];
    squadra.nome = nome;
    squadra.falli = falli,
    narray.push(squadra);
}

console.log(narray);