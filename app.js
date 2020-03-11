// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
 var Prograd1 ="padro";
 console.log(Prograd1);
 var Prograd2 ="pony";
 console.log(Prograd2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(Prograd1.length>Prograd2.length)
{
    console.log("Prograd1 is the longest");
}
else if(Prograd2.length>Prograd1.length)
{
    console.log("Prograd2 is the longest");
}
else
{
console.log("Both are equall");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
if (a, e, i, o, u > 0) {
    console.log(`a : ${a}`);
    document.write(`a : ${a}<br>`);
    console.log(`e : ${e}`);
    document.write(`e : ${e}<br>`);
    console.log(`i : ${i}`);
    document.write(`i : ${i}<br>`);
    console.log(`o : ${o}`);
    document.write(`o : ${o}<br>`);
    console.log(`u : ${u}`);
    document.write(`u : ${u}<br>`);
} else {
    console.log("No vowels")
    document.write(`No vowels. <br>`);
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters 
var u=0,l=0;
for(var i=0;i<Prograd1.length;i++)
if(Prograd1.charCodeAt(i)<97)
{
    u=u+1;
}
else{
    l=l+1;
}
console.log(+u);
console.log(+l); 
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var gp="";
for(var i=0;i<Prograd1.length;i++)
{
    gp = gp +(Prograd1.charAt[i].toUpperCase)
    if(i==Prograd1-1)
    {
        break;
    }
    else{
        gp = gp + "";
    }
}
console.log(gp);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP
var x= Prograd2.split("");
var y= x.reverse();
var r=y.join("");
console.log(r);


// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(`${str1} ${Prograd_2}`);
document.write(`${str1} ${Prograd_2}<br><br>`);

console.log(`${Prograd_2} ${str1}`);
document.write(`${Prograd_2} ${str1}<br>`);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
if(p[0]<P[1])
{
    console.log("the driver name 1st")
}
// - Yo, the navigator goes first definitely.
else if( p[0]>p[1] )
{
    console.log("Yo, the navigator goes first definitely")
}

// - What?! You both have the same name?
else{
    console.log("What?! You both have the same name?")

}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
