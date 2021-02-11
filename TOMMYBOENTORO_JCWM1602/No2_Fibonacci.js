// Fibbonaci sequence


function Fibonacci(number){
    let n1, n2
    n1 = 0
    n2 = 1
    let hasil = 0
    let number1 = parseInt(number)
    
    for (let i = 1; i <= number1; i++) {
    console.log(n1);
        if(hasil < number1){
        hasil = n1 + n2;
        n1 = n2;
        n2 = hasil;
        }else if(hasil > number1){
            break
        }
    }
}
Fibonacci(100)

function Fibbonaciganjil(number){
    let n1, n2
    n1 = 0
    n2 = 1
    let hasil = ""
    let number1 = parseInt(number)
    let hasilganjil = 0
    
    for (let i = 1; i <= number1; i++) {
    console.log(n1);
        if(hasil < number1){
        hasil= n1 + n2;
        n1 = n2;
        n2 = hasil;
        }else if(hasil > number1){
            break
        }
        for(let j=1; j < hasil.length; j++){
            if(hasil[j] % 2 != 0){
                hasilganjil = hasil[j]
            }
        }return hasilganjil
    }
    
}

Fibbonaciganjil(4)

function FibbonaciGenap(number){
    let n1, n2
    n1 = 0
    n2 = 1
    let hasil = ""
    let number1 = parseInt(number)
    let hasilgenap = 0
    
    for (let i = 1; i <= number1; i++) {
    console.log(n1);
        if(hasil < number1){
        hasil= n1 + n2;
        n1 = n2;
        n2 = hasil;
        }else if(hasil > number1){
            break
        }
        for(let j=1; j < hasil.length; j++){
            if(hasil[j] % 2 == 0){
                hasilgenap = hasil[j]
            }
        }return hasilgenap
    }
}
FibbonaciGenap(4)