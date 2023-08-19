
let list = [1,0,10,11, "nisma", "Ali" , 5 , 7]

let onlyString = []
let onlyNumber = []

for(let i = 0; i< list.length ; i++){
    if(typeof list[i] === "string"){
        onlyString.push(list[i])
    }
    else {
        onlyNumber.push(list[i])
    }

}

console.log(onlyString)
console.log(onlyNumber)









