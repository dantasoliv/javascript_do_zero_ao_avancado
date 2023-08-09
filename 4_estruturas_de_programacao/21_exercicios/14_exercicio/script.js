// For
console.log("For");

for(i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(`${i} é par`);
    }else{
        console.log(`${i} é impar`);
    }
}

console.log("------------------------------");
console.log("While");

// While
let n = 0;

while(n <= 50){
    if(n % 2 == 0){
        console.log(`${n} é par`);
    }else{
        console.log(`${n} é impar`);
    }
    n ++
}