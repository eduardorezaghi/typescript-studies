// This is an industrial-grade general-purpose greeter function:
function greet(person:string, date:Date) {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}

greet("Maddison", new Date());