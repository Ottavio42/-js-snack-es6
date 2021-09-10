const bici = [
    {
        nome: "verde",
        kg: 7,
    },
    {
        nome: "gialla",
        kg: 12,
    },
    {
        nome: "blu",
        kg: 9
    }
];

let leggera = bici[0];

for(i=0; i < bici.length; i++){
    if( bici[i].kg < leggera.kg){
        leggera = bici[i];
    }
}

let { nome, kg } = leggera;
console.log(`La bici più leggera è ${nome} e il suo peso è ${kg}.`);