/* js variables */

/*var course="learning lwc"
console.log(course)

var course="learning coding corretly"
console.log(course)

function abc(){
    var anothercourse = "learning apex too"
    console.log(anothercourse)
}
abc()*/

/*var course="learning lwc"
console.log(window.course)

let anothercourse ="first let keyword makes learning apex"
console.log(anothercourse)
anothercourse="update let keyword"
console.log(anothercourse)
//let anothercourse ="throws an error"

//let anothercourse="sneha is learning coding"
//console.log(anothercourse)

if(2==2){
    let demo="let keyword inside box scope"
    console.log(demo)
}

if(1==1){
    var demo1="var keyword inside the box scope"
    console.log(demo1)
}

if(3==3){
    const demo2="const keyword inside the box scope"
    console.log(demo2)
}*/
/*-------------------------------------------------------------------------------------------------------*/
// data types in js
/*var x = 10.66 // number includes int and float in js
console.log(typeof x)

var y = 1283747n // its a bigint, we need to define number with "n"
console.log(typeof y)

var name1 = 'sneha' //string can be written in single and double quote 
console.log(typeof name1)

var isMonday = true //for boolean we should not use single or double quotes in js otherwise it takes it as string
console.log(typeof isMonday)

var a //undefined data type, when variable is not initialized it automatically defines "undefined data type"
console.log(typeof a)

var obj={} //object data type syntax
console.log(typeof obj)

var arr = [] //array data type
console.log(typeof arr)

var sym = Symbol("id") //symbol data type
console.log(typeof sym)*/

/*----------------------------------------------------------------------------------------------------------*/
//null Vs undefined with ==  nd === 
//there are two types of equality comparision
//normal comparision and strick comparision
//normal comparision || comparies values
/*console.log(3 == "3")
console.log("sneha" == "SNEHA")

//strick comparision || comparies values+data type
console.log(3 === "3")
console.log("sneha" === "sneha")

//Undefined Vs Null
var x //automatically without explicitly assigning it defines as "undefined"
console.log(x)

var y=null //needs to assign null value explicitly 
console.log(y)

console.log(x == y) //shows output as true as both the values have no numbers
console.log(x===y) //shows output as false as typeof null is object and undefined is undefined*/

//array
//array index starts from 0
var arr = ["a","b","c"]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
arr.push("3")
console.log(arr)

//object =key value pair
 var obj = {
     "name1" : "sneha",
     "age" : 25,
     "company" : "Cognizant",
     "full name" : "zero to hero course"

 }
 console.log(obj.name1)
 console.log(obj["age"])//object can be accessed by dot(.) method or by array
 console.log(obj["full name"]) //when we want to access word between the space that time we go with array access
 obj.hobbies = "reding a book"
 console.log(obj)
 
 //spread operator is mainly used for objects and arrays
 //All Using Spread Operator////important!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //Expanding of String
 let greetings = "Welcom Everyone"
 let charlist = [...greetings]
 console.log(charlist)
 console.log(charlist[5])

 //combining the array
 let arr1 = ["cognizant","Tcs","Infosys"]
 let arr2 = ["Deloitte","EY","PWC","KPMG"]
 let arr3 = [...arr1, ...arr2]
 console.log(arr3)

 // adding array
 let arr4 = ["a","b","c"]
 let arr5 = ["sneha", ...arr4]//u can add front or after that like[...arr4,"sneha"]
 let arr6 = [...arr5, "sanjana"]
 console.log(arr5) //o/p :-[sneha, a, b, c]
 console.log(arr6)//o/p :-[sneha,a,b,c,sanjana]

 //combining an object
 //always remember while combining a object if obj1 as same key as obj2 then preference will be given
 //for object 2 it overrides the values of object one
 //example

 let obj1={name2:"salesforce",age2:25,date:"22/7/1998"}
 let obj2={name2:"facebook",age2:38} 
 let obj3 = {...obj1, ...obj2}
 console.log(obj3)//o/p {name2:facebook , age2:38 , date:22/7/1998}
 //it will give preference to obj2 as keys of obj1 nd obj2 are same

//most important "Shallow Copy"
//1st will see the traiditional method where we are going wrong

var arr10 = ["x","y","z"]
arr10.push(20)
console.log(arr10)

var arr11 = arr10
arr11.push("sanjana")
console.log(arr10)//o/p :-- ['x', 'y', 'z', 20, 'sanjana']
console.log(arr11)//o/p :-- ['x', 'y', 'z', 20, 'sanjana']
//here in the above shallow copy we get both output same as when we assigned arr10 we thought it will
//not get updated when we push in arr11 but it did.
//its becz it acts as a reference so both arr's will get updated
//that's y we should not use push,pop and shift methods 

//????? to avoide this we have solution
//we use spread operator for this solution
var arr12 = ["x","y","z"]
var arr13 = [...arr12]
arr13.push("sneha")
console.log(arr12) //o/p :--  ['x', 'y', 'z']
console.log(arr13) //o/p :--  ['x', 'y', 'z', 'sneha']

//Nested Copy --------->here spread operator files<-------------------------
//it only works for one way array not two way

var arrobj = [
    {
        name : "sneha",
        lastname : "pawar"
    }
]
/*var arrobj1 = [...arrobj]
console.log(arrobj1)

arrobj1[0].name = "sanjana"
console.log(arrobj) //o/p :-- {name: 'sanjana', lastname: 'pawar'}
console.log(arrobj1)//o/p :-- {name: 'sanjana', lastname: 'pawar'}*/

//hack to work with nested one
var arrobj1 = JSON.parse(JSON.stringify(arrobj))
arrobj1[0].name = "sanjana"
console.log(arrobj) 
console.log(arrobj1)

/*-------------------------------------------------------------------------------------------------------*/
//array destructruring [destructuring means extracting the data ]

let arr14 = ["amazon","facebook"]//to extract amazon nd facebook we write the below code
/*let company1 = arr14[0]
let company2 = arr14[1]*/
//in the above way we extract the data of array 
// we can do that in array destructuring way
let [company1,company2] = arr14
console.log(company1)
console.log(company2)

//object destructuring is lot used in lwc
//instead of creating a same "key" as a variable and extracting data from the object we use destructuring

let options={
    title : "zero to hero",
    age:25,
    type:"crm"
}

/*var title = options.title
var age = options.age//when we want to create and use same variables for extracting we go with destructuring
console.log(title)*/ //Instead of using this, we can go with object destructuring

let {title,age,type} = options
console.log(title)
console.log(age)
console.log(type)

//-------------------------------------------------------------------><-------------------------------------------------------------------------
//String interpolation
//the normal way of doing string concantation

var name22 = "sonu"
var aga = 25

var str = "my name is " + name22 + " and my age is" + aga
console.log(str)
var a=2
var b=3
var str1 = "the sum of" +a+ "and" +b+ "is" +a+b
console.log(str1)

//to avoid the spacing and dynamically writing we use string interpolation 
//for that we use `` (back ticks) and to append js variable we use ${}

var name23 = "sanjana"
var age11 = 25
console.log(`my name is ${name23} and my age is ${age11}`)

//-----------------------------------------------------------------><------------------------------------------
//String Methods
console.log("---------------------------------------------------------------");
let str3 = "hello guys i hope you are doing good"
// we start with includes() method :-it helps to check whether the entered string exists or no

let check = str3.includes("i")
console.log(check)

//indexof() method is used to identify the index of the 1st occuring string means
//in a sentence if there are two words with same name like for ex :- my name is sneha sneha
//then it returns the index of 1st word sneha not the 2nd word index
//if the output is -1 then the word doesn't exist

let index = str3.indexOf("doing")
console.log(index)
console.log("-------------------------------------------------------");

//startswith() method used to identify whether the string is starting with the letter or word 
//its case sensitive 

console.log(str3.startsWith("hello"))

//slice() :-this method extracts the part of the string and return the extracted part of the string

let newStr = str3.slice(6,10)
console.log(newStr)
 
//tolowercase() :- convert string into lower case letters
let lowercase =  "My namE is SnehA"
console.log(lowercase.toLowerCase())

//touppercase()  :-convert string into upper case letters
console.log(lowercase.toUpperCase())

//trim() :- method removes white spaces from both the sides of the string 
let searchtext = "                   salesforce lwc         "
console.log(searchtext)
console.log(searchtext.trim())

//-----------------------------------------------------------------><-----------------------------------------------------

//Object and JSON Operations
//object.keys() :- will extract all the key from the object
//object.values() :- will extract all the value from the object

let obj4 = {
    name24 : "xyz",
    age12 : 25,
    dob : "2/7/1994" 

}
//object.keys()         object.values()
console.log(Object.keys(obj4))
console.log(Object.values(obj4))

//JSON.stringify() sends the object data into string format
let str4 = JSON.stringify(obj4)
console.log(str4)

//JSON.parse() converts the string data into object format
console.log(JSON.parse(str4))

//---------------------------------------------------------><-------------------------------------------------------------

//till object and Json Opertaions
