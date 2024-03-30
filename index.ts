//3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let message = "hello world";
let name13: string = ("allama iqbal");
console.log (name13);
// step 1 lower case
let lowerCaseName : string = name13.toLowerCase();
console.log(lowerCaseName);
//step 2 upper case
let upperCaseName : string = name13.toUpperCase();
console.log(upperCaseName);
// // step 3 title case
// let word: string[] = name13.split(" ")
// let tileCaseName : string = 


// 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("Allama Iqbal once said,'Destiny is the prison and chain of the ignorant.' ");
//5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson1:string = ("Allama Iqbal"); 
let message1:string= `${famousPerson1} once said, 'The ultimate aim of the ego is not to see something, but to be something'`
console.log(message1);
//6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so  the whitespace around the name is displayed. Then print the name after striping the white spaces.
let myName :string = "\t Wajeeha Badar \n";
console.log(`name with whitespace ${myName}`);
let strippedName : string = myName.trim();
console.log(`stripped name :${strippedName}`);



//7:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//Addition

let num1 : number = 4;
let num2 : number = 4;
let altogether : number = num1 + num2;
let sum = `${num1} + ${num2} = ${altogether}`;


//Subtraction
let numb1 : number = 12;
let numb2 : number = 4;
let left = numb1 - numb2;
let sub = `${num1} - ${numb2} = ${left}`;
console.log(sub);

//Multiplication
let number1 : number = 4;
let number2 : number = 2;
let total = number1 * number2;
let product =`${number1} * ${number2} = ${total}`;
console.log(product);
 //Division
 let number3 : number = 72 ;
 let number4 : number = 9 ;
 let result : number = number3 / number4 ;
 let result2 =`${number3} / ${number4} =${result}`;
 console.log(result2);
//8: You should create four lines that look like this: console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

 console.log(5 + 3);
 console.log(16 - 8);
 console.log(4 * 2);
 console.log(72 / 9);

 //9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

 let favNumber : number = 6
 let favNumber1 : string = `my favourite number is ${favNumber}`
 console.log(favNumber1)

 //10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

 //assignment 10 has done.


 //11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
 let fridendName: string[]= ["Ali", "Ahmed","Raza"] ;
 console.log(fridendName[0]);
 console.log(fridendName[1]);
 console.log(fridendName[2]);

 












