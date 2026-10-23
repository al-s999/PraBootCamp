function calculate(){
    number1 = parseFloat(document.getElementById('number1').value);
    number2 = parseFloat(document.getElementById('number2').value);
    operator = document.getElementById('operator').value.trim();
    calc = document.getElementById('hasil');
    let hasil;

    if(isNaN(number1) || isNaN(number2)){
        calc.textContent ="Harap masukkan 2 angka yang valid";
        return;
    }
    
    if(operator === ''){
        calc.textContent ="Harap masukkan operator yang valid";
        return;
        
    } else {
        if(operator === '+'){
            hasil = number1 + number2;
        }
        else if(operator === '-'){
            hasil = number1 - number2;
        }
        else if(operator === '*'){
            hasil = number1 * number2;
        }
        else if(operator === '/'){
            if(number2 === 0){
                hasil = `Hasil nya tak hingga karena ${number1} dibagi dengan ${number2}`;
            } else {
                hasil = number1/number2;
            }
        } else {
            calc.textContent =`operator tidak dikenali`;
            return;
        }

        calc.textContent =`Hasil nya = ${hasil}`;
    }
};