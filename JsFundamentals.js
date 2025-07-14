var arr = [1,2,3,4]

var newArr = arr.map(function(val){
  return val*3;
})
// console.log(newArr);

let filterArray = [1,2,3,4,5]

let newarr = filterArray.filter(function(val){
  if(val > 3) return true;
  else return false
}) 

let arrFind = filterArray.find(function(value){
  if(value == 2) return value
})

let arrIdx = filterArray.indexOf(4)
// console.log(arrIdx)

// Object = Key Value pair

const obj = {
  name:"Shubham",
  age:18,
  CanVote: true
}

console.log(obj.name);
const n = obj['name']


console.log(n);
obj.age = 45
const a = obj.age
console.log(a);
console.log(obj);

// async await -- asynchronous task.
async function abcd(){
  await fetch()
}
