let arr1 = ["Daniel", "Maria", "Ana", "Maros", "Joao"];

let arr2 = [1,2,3];

function elementosArray(array){
    if(array.length >= 5){
        return "Muitos elementos";
    }else{
        return "Poucos elementos";
    }
};

console.log(elementosArray(arr1));
console.log(elementosArray(arr2));