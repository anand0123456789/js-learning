//const obj=new Object()=>singelton object due to constructor initialization
// const obj={}=>not a singelton object due literal initialization
const k=Symbol("myKey")
let anObject={
    name:"lalit",
    surname:"kumar",
    calling:9458745632,
    email:"lalitkumar@gamail.com",
    [k]:"key1"
}
let another={
    1:"an",
    2:"a",
    3:"the"

}
//console.log(anObject);
console.log(anObject[k]);
const obj3=Object.assign({},anObject,another)
console.log(obj3);
