function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 3, 34, 23, 30, 2, 55, 67, 4];

console.log(filtraPares(meuArray));
console.log(meuArray);