interface user{
    name:String,
    age:number
}

function sumofage(user1:user,user2:user){
    return user1.age+user2.age;
}

let user1:user={
   name:"vedant",
   age:19
}


let user2:user={
    name:"vedant",
    age:19
 }

 console.log(sumofage(user1,user2))