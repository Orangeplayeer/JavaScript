// Array Methods
//map method
//map loop always returns an array (interview question)

let arrmeth = [2,4,6,8,10,12]

let newarray = arrmeth.map(function(currentItem ,index, array ){
    console.log(`CurrentItem is ${currentItem} Index is ${index} array is ${array}`)
    return currentItem*2
})

console.log(newarray)


let arr35 = [
    {firstname :"sneha", lastname: "pawar"},
    {firstname :"sanj",lastname:"pawar"},
    ]

   
    
    let newarray1 = arr35.map(function(currentItem ,index, array ){
        console.log(`CurrentItem is ${currentItem} Index is ${index} array is ${array}`)
        return currentItem.firstname + currentItem.lastname
    })

    console.log(newarray1)
    console.log("-----------------------------------------------");
let arr36 = [
    {
        happy : "birthday",
        celebration :"daily"
    },
    {
        happy : "sneha birthday",
        celebration : "weekly"
    }
]

let newarry2 = arr36.map(function(currentItem){
    return currentItem.happy
})

console.log(newarry2)

//Filter method

let filteredvalues = newarray.filter(function(currentItem, Index, array){
    console.log(`current iteams are ${currentItem}`);
    return currentItem > 5;
    

})

console.log(`Greater then 5 are :- ${filteredvalues}`);

//every() method return true or false by checking each and every element

let ageofperson = [32,33,18,25]
let isalladult = ageofperson.every(function(currentItem){
    return currentItem >=18;
})
console.log(`age of the person after checking each element in the array is :-     ${isalladult}`);

//some() method return true or false by just checking by any of the condition met with the property or element 
//it returns true for ex:-[32,33,18,25] if we the above condition it will check with 32 and return true, it won't check
//each and every element present in the array

let agelist = [32,33,18,25]
let isAdult = agelist.some(function(currentItem){
    return currentItem > 18;
})

console.log(`some method :- ${isAdult}`);

//sort()

var names = ["karthik","john","vishal","akash","abhishek"]
console.log(names.sort());

//sorting the numbers

var points = [22,54,31,4,6,12,46]
var sortnumbers = points.sort(function(a,b){
    return a-b;
})
console.log(sortnumbers);

//reduce method //below is the syntax
//array.reduce(function(total,currentValue,index,array){

//},initial value)

let nums = [12, 78, 30];
let sum = nums.reduce(function(total, currentItem){
    return total+currentItem;
},0)

console.log(`reduce method :- ${sum}`);

//foreach method
//foreach method will not return any thing it just loops but map returns

nums.forEach(function(currentItem){
    console.log(currentItem);
})

//promises--------

function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data === "Success"){
            return resolve("successfully executed");
        }else{
            return reject("unscuccessfully exceuted");
        }
    })
}

checkIsSuccess('Success').then(function(result){
    console.log(result);
}).catch(function(error){
    console.error(error);
})
