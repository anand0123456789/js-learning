const user={
Name:"lalit",
job:"mern developer",
work:function(){
console.log(`hey my name is ${this.Name} and i am a ${this.job}`);
console.log(this);
}
}
user.work()
let ninja="ninja hathori"
function name(){
    console.log(`ding ding ding mai hu ${ninja} aaya hu apke sahar`);
}
name()
user.Name="lalit rajput"
user.work()
let chqi=()=>{  // arrow function
    userNAme="anand"
    console.log(this.userNAme)
}
chqi()