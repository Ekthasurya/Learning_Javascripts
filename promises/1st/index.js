function calculate(num1, num2) {
   
    function operation(num1, num2, callback) {
        
        return callback(num1, num2);
    }

   
    function addition(a, b) {
        return a + b;
    }

    
    function multiplication(a, b) {
        return a * b;
    }

    
    const additionResult = operation(num1, num2, addition);

    
    const multiplicationResult = operation(num1, num2, multiplication);

    
    console.log(`Addition result: ${additionResult}`);
    console.log(`Multiplication result: ${multiplicationResult}`);
}

calculate(5,3)