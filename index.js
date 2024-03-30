//3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var message = "hello world";
var name13 = ("allama iqbal");
console.log(name13);
// step 1 lower case
var lowerCaseName = name13.toLowerCase();
console.log(lowerCaseName);
//step 2 upper case
var upperCaseName = name13.toUpperCase();
console.log(upperCaseName);
// // step 3 title case
// let word: string[] = name13.split(" ")
// let tileCaseName : string = 
// 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("Allama Iqbal once said,'Destiny is the prison and chain of the ignorant.' ");
//5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousPerson1 = ("Allama Iqbal");
var message1 = "".concat(famousPerson1, " once said, 'The ultimate aim of the ego is not to see something, but to be something'");
console.log(message1);
//6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so  the whitespace around the name is displayed. Then print the name after striping the white spaces.
var myName = "\t Wajeeha Badar \n";
console.log("name with whitespace ".concat(myName));
var strippedName = myName.trim();
console.log("stripped name :".concat(strippedName));
//7:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//Addition
var num1 = 4;
var num2 = 4;
var altogether = num1 + num2;
var sum = "".concat(num1, " + ").concat(num2, " = ").concat(altogether);
//Subtraction
var numb1 = 12;
var numb2 = 4;
var left = numb1 - numb2;
var sub = "".concat(num1, " - ").concat(numb2, " = ").concat(left);
console.log(sub);
//Multiplication
var number1 = 4;
var number2 = 2;
var total = number1 * number2;
var product = "".concat(number1, " * ").concat(number2, " = ").concat(total);
console.log(product);
//Division
var number3 = 72;
var number4 = 9;
var result = number3 / number4;
var result2 = "".concat(number3, " / ").concat(number4, " =").concat(result);
console.log(result2);
//8: You should create four lines that look like this: console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(16 - 8);
console.log(4 * 2);
console.log(72 / 9);
//9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNumber = 6;
var favNumber1 = "my favourite number is ".concat(favNumber);
console.log(favNumber1);
//10:Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//assignment 10 has done.
//11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var fridendName = ["Ali", "Ahmed", "Raza"];
console.log(fridendName[0]);
console.log(fridendName[1]);
console.log(fridendName[2]);
