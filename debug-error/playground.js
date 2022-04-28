function validaArray(arr, num){
    try{
        if(!arr && !num) 
            throw new ReferenceError("Envie os par�metros");

        if(typeof arr !== 'object') 
            throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'number') 
            throw new TypeError("Num precisa ser do tipo number");

        if(arr.length !== num) 
            throw new RangeError("Tamanho inv�lido!");
        
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este � um ReferenceError!")
            console.log(e.message)
        }
        else if(e instanceof TypeError){
            console.log("Este � um TypeError!")
            console.log(e.message)
        }
        else if(e instanceof RangeError){
            console.log("Este � um RangeError!")
            console.log(e.message)
        }
        else{
            console.log("Tipo de erro n�o esperado:" + e);
        }
    }
}

console.log(validaArray());