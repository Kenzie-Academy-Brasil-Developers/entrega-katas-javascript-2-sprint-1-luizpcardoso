// comece a criar a sua função add na linha abaixo

function add(num1,num2){

    sum = num1 + num2;
    return sum;
}


// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(num1 , num2) {
    let mult = 0;
    for (let i = 0; i<num2; i++) {

        mult = mult + num1;
    }
    return mult;
}


// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(base, expo) {

    let power = base;

    for (let i = 1; i<expo; i++) {

        power = multiply(power, base);
    }
    return power;


}


// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(num) {

    fac = num;

    for (let i = num-1; i>1; i = i-1) {

        fac = multiply(fac, i)

    }
    return fac;
}


// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(position) {

let fiboLast = 0; 

let fiboCurrent = 1;

let fiboArray = [];

for(let i=0 ; i<= position ; i++){

    fiboArray.push(fiboCurrent)

    fiboCurrent = fiboCurrent + fiboLast;

    fiboLast = fiboArray[i];
}

return fiboArray[position-1]

}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
