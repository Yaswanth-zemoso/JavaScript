function sayHello(){
    console.log("Hello");
}


// Here passing sayHello funciton as an argument to setTimeout funciton
// sayHello funciton invockes after 1 second
setTimeout(sayHello, 1000);