interface person{
    name:String,
    age:number,
    email:String,
    password:String
}

type update=Pick<person,"name"|"password">   //picking something from the interface or type

function updating (updateprops:update){

}