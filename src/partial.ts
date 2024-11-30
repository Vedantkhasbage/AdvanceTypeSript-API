// interface person{
//     name:String,
//     age:number,
//     password:String
// }

// type updateuser=Pick<person,"name"|"password">

// type updateOptional=Partial<updateuser>

// function newd(user:updateOptional){
   
// }


//we can make it partialy select by using partial



// interface config{
//    readonly name:String,
//    readonly age:Number        //either define separate or make entire object as readonly
// }
// const object:Readonly<config>={
//     name:"vedant",
//     age:19
// }
// object.name="aman"   //showing error

// const arr:Readonly<number[]>=[1,2,3,4,5]


// arr[0]=10

// type User=Record<string,{age:number,name:string}>

// const newuser:User={
//     "xyz":{
//         age:19,
//         name:"vedant"
//     }
// }


// interface member{
//     name:String,
//     age:number
// }

// const usermap=new Map<String,member>();

// usermap.set("vedantsir",{name:"dinesh",age:19})
// usermap.set("sir",{name:"dinesh",age:29})

// console.log(usermap)   //map in typescript like in JAVA


//exclude

// type events='click'|'mouse'|'scroll'
// type exclusion=Exclude<events,'scroll'>

// function perform(usering:exclusion){
//     console.log(usering)
// }

// perform('click') //correct
// perform('scroll')// error