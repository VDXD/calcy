const numbers = document.getElementById("numbers");
function calcy(value){
   
    if(value != '='){
        numbers.value += value;
    }
    else{
        if(numbers.value.includes('+')){
        const num = numbers.value.split('+');
        numbers.value = parseInt(num[0]) + parseInt(num[1]);
        }
        if(numbers.value.includes('-')){
            const num = numbers.value.split('-');
            numbers.value = parseInt(num[0]) - parseInt(num[1]);
        }
        if(numbers.value.includes('×')){
            const num = numbers.value.split('×');
            numbers.value = parseInt(num[0]) * parseInt(num[1]);
        }
        if(numbers.value.includes('÷')){
            const num = numbers.value.split('÷');
            numbers.value = parseInt(num[0]) / parseInt(num[1]);
        }
        if(numbers.value.includes('²')){
            const num = numbers.value.split('²');
            numbers.value = parseInt(num) * parseInt(num);
        }  
            
    }


    
}
function clear(){
    numbers.value = '';
}