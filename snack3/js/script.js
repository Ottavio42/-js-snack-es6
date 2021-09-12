const CutArray = (array, a, b) => {
    let nuovoArray = array.filter((element,index)=>(index>=a && index<b));

    // const nuovoArray=[];
    // array.forEach((element,index) => {
    //     if(index>=a && index<b){
    //         nuovoArray.push(element);
    //     }
    // });
    return nuovoArray;
    
};

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let min = 3;
let max = 9;

let xArray = CutArray(num, min, max);

console.log(xArray);


