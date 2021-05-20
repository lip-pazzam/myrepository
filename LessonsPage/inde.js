




//Condicionais e controle de fluxo 
/*

let notaA = "A";
    notaB = "B";
    notaC= "C";
    notaD= "D";
    notaF = "F";


let points = ""

points = 50

if (points >= 90) {
    console.log (notaA)
} else if (points >= 80 && points <90) {
    console.log(notaB)
} else if (points >=70 && points <80) {
    console.log (notaC)
}


function calculate(number1, operator, number2) {
     

    //switvh (interroptor)
    let result
    switch (operator) {
        case '+':
            result = number1 + number2
            break
     
        case '-':
            result = number1 - number2
            break

        case '*': 
        result = number1 * number2
        break

        case '/':
            result = number1 / number2
            break
         
} 
return result
}



console.log(calculate(2, "-",1))


 //throw (desparar, lançar)


 //capturar erros e dar continuidade a aplicação

function sayMyName (name) {
    if (name==='') {
        throw "Nome é obrigatório"
        //throw new Error ("Nome é obrigatório")
    }
}

try {
    sayMyName ("")
} catch(hh) {
    console.log(hh)
}


// Estrutura de Repetição 

//while (enquanto)

for(let j = 100; j > 0; j--) {
    console.log(j)
}







let i = 0
while(i < 10) {
    console.log(i)

    i/=35
}
*/



const btn = document.querySelector('#btn')
const lessonitens = document.querySelector('.lessonitens')
btn.addEventListener('click', function(){ 
   
   
    if(lessonitens.style.height = "61px") {lessonitens.style.height = "max-content";} else {
        lessonitens.style.height = "61"
    }
   
 }) 




const mymodule = require('./jk')
console.log(mymodule)






