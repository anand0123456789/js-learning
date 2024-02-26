// function Name(){
//     console.log('A'); 
//     console.log('N');
//     console.log('A');
//     console.log('N');
//     console.log('D');
// }
// Name()
// function addTwoNumber(number1,number2){
//     console.log(number1+number2); 
// }
function Name(number1,number2){
    if(typeof number1=='number'){
    const result=number1+number2
    return result;
    }
    return number2-number1;
}
let n=Number(2);
 let r=Name(n,8)
console.log(r)