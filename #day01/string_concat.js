//6.	Cut (slice) out the first word of the string using substr() or substring() method
//7.	Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let string ='30 Days Of JavaScript'
console.log(string.substring(3))  //Days Of JavaScript


//8.	check if the string contain a word script using includes() method
let script= 'Days of javascript from 30 days of javascript'
console.log(script.includes('script')) //true


//9.	Split the string into an array using split() method 
//10.	Split the string 30 Days Of JavaScript at the space using split() method 

let splitstring = '30 Days Of JavaScript'
console.log(splitstring.split(' ')) 
/*Array(4) [ "30", "Days", "Of", "JavaScript" ]
​0: "30"
​1: "Days"
​2: "Of"
​3: "JavaScript"
​length: 4 */

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(','))
/*Array(7) [ "Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon" ]
​0: "Facebook"
​1: " Google"
​2: " Microsoft"
​3: " Apple"
​4: " IBM"
​5: " Oracle"
​6: " Amazon"
​length: 7 */

//12.	Change ‘30 Days of javascript’ to ‘30 Days of python’ using replace() method.
let oldstring = '30 Days of javascript'
console.log(oldstring.replace('30 Days of javascript','30 Days of python')) //30 Days of python


//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let indexin ='30 Days Of JavaScript' 
console.log(indexin.charAt(15)) //S


//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let findcodej ='30DaysOfJavaScript'
console.log(findcodej.charCodeAt('J')) //51

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript 
let str='30 Days Of JavaScript'
console.log(str.indexOf('30 Days Of JavaScript')) //0
console.log(str.indexOf('30'))//0
console.log(str.indexOf('a'))//4

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let lstr ='30 Days Of JavaScript' 
console.log(lstr.lastIndexOf('JavaScript')) //11

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
let findb='You cannot end a sentence with because because because is a conjunction'
console.log(findb.indexOf('because')) //31
//18.	Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
let lfindb ='You cannot end a sentence with because because because is a conjunction'
console.log(lfindb.lastIndexOf('because')) //41

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
let ser ='You cannot end a sentence with because because because is a conjunction'
console.log(ser.search('because'))//31

//20.	Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '. 
let tri = ' 30 Days Of JavaScript '
console.log(tri)
console.log(tri.trim())

//21.	Use startsWith() method with the string 30 Days Of JavaScript and make the result true 
let sta = '30 Days Of JavaScript'
console.log(sta.startsWith('30'))//true
console.log(sta.startsWith('Days'))//false
console.log(sta.startsWith('of'))//false


//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true 
let en = '30 Days Of JavaScript'
console.log(en.endsWith('30'))//false
console.log(en.endsWith('JavaScript'))//true


//Use match() method to find all the a’s in 30 Days Of JavaScript 
let finda =' 30 Days Of JavaScript '
console.log(finda.match('a'))
/*Array [ "a" ]
​0: "a"
​groups: undefined
​index: 5
​input: " 30 Days Of JavaScript "
​length: 1 */


//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript' NOTDONE
let merge ='30 Days of'
console.log(merge.concat('JavaScript'))//30 Days ofJavaScript

//Use repeat() method to print 30 Days Of JavaScript 2 times 
let re='30 Days Of JavaScript 2 times '
console.log(re.repeat(2))//30 Days Of JavaScript 2 times 30 Days Of JavaScript 2 times


