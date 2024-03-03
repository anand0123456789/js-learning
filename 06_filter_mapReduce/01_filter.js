// const coding=["js","java","python","ballu"]
// const value=coding.forEach((item)=>{
//     return item;
// })
// console.log(value);
// const myNums=[1,2,3,4,5,6]
// let n=myNums.filter((nums)=>{
//    if(nums!=5){
//     return nums;
//    }
// })
//console.log(n);
// const m=new Map()
// m.set("in",'india')
// m.set("uk","india")
// m.set("usa","india")
// m.set("ok",'india')
// for (const [value,key] of m) {
//     console.log(key);
// }
const arr=[1,2,3,4,5]
let initialValue=0
const someValue=arr.reduce((accumulator,currentValue)=> {
return accumulator+currentValue
},initialValue
)
console.log(someValue);