function show(){
    var functionVar = "Soy una var con alcance de bloque";
    let functionLet = "Soy un let con alcance de bloque";
    const functionConst = "Soy un const con alcance de bloque";
    }
    show();
    
    //nsole.log(functionVar); // Lanza ReferenceError
    //console.log(functionLet); // Lanza ReferenceError
    //console.log(functionConst); // Lanza ReferenceError