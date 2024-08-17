//Infer Types  (Implicit Types) =>

// let userName="Akshay"

// userName=10

//    *********************************************    //


// Defining Types (Excplicit Types) =>

let userName : string = "Akshay"
let age : number = 23
let isVerified : boolean = true
let skills : string[] = ["JS","TS","C"]  // Cant give Emplty Array(bcoz it expects empty array)
let userDetails : { name : string , age : number} = {   // only allowed specific keys and specific types
    name:"Akshay",
    age:22
}  

userDetails.age = 23


//    *********************************************    //

interface Details {
    name : string;
    age : number;
    salary : number;
    getName : () => void;
}

let userDetail : Details = {   // only allowed specific keys and specific types
    name:"Akshay",
    age:22,
    salary: 100,
    getName(){
        console.log(this.name)
    }
}


//    *********************************************    //

// Type

type detail = {
    name : string;
    age : number;
    salary : number;
    getName : () => void;
}

let userData : detail = {   
    name:"Akshay",
    age:22,
    salary: 100,
    getName(){
        console.log(this.name)
    }
}

//    *********************************************    //

// Union / Optional => we can give multiple types

type data = {
    name : string | number;  // Union
    age : number;
    salary : number;
    getName?: () => void; // Option if not present handles
}

let user : data = {   
    name:11111,
    age:22,
    salary: 100,
}

let skill : (string | number)[] = ["JS","TS","C" ,1 , 2 , 3]  // strimg and number


//    *********************************************    //


// Function


type data1 = {
    name : string | number;  // Union
    age : number;
    salary : number;
    getName?: () => void; // Option if not present handles
}

let user1 : data1 = {   
    name:11111,
    age:22,
    salary: 100,
}

function getUserName(user:data1):number{ // here giving type outside SPECIFY RETURN TYPE
    return user.age
}

getUserName(user1)


type value = {
    name:string | number;
    age:number
}


function getUser(user:data1):value{ // here giving type outside SPECIFY RETURN TYPE
    return {name:user.name,age:user.age}
}

getUser(user1)


function alldata({name , age} : {name:string ;age:number}){
   return name
}

alldata({name:"akshay",age:23})

//    *********************************************    //

//NAMED Types

type status= "pending" | "completed" | "failed" //  create types  changes the value ERROR OCCURS

//    *********************************************    //


// Function Overloading


function add(num1: number | string , num2:number | number  ) : number | string{
    if(typeof num1==="string" || typeof num2==="string"){
        return num1+ " " +num2
    }
    return num1 + num2
}

add(2 , 2)

function add2(num1 : string , num2 : string) :string // FUNCTION OVERLOADING
function add2(num1 : number , num2 : number) :number
function add2(num1: any  , num2: any  ) : any{ // Handles any Data type (!!! Not good Practive)
    return num1 + num2
}

add2(2 , 2)
add2("2" , "2")


//    *********************************************    //

//Generics

function getAge<T>(age : T) : T{
    return age
}

getAge<string>("hy")
getAge<number>(2)



// -----------------------------------------------------

type user={
    name:string;
    age:number;
}


type admin={
    fName:string;
    role:string
}

const userValue:user={
    name:"akshay",
    age:23
}


const adminValue:admin={
    fName:"akshay",
    role:"admin"
}



function getDetails<T>(userDetail:T):T{
    return userDetail
}


const users=getDetails<user>(userValue)   // Here difficult to give keys from the object bcoz keys are diff in ADMIN AND USER ---->USE GENERICS
const admins=getDetails<admin>(adminValue)

users.age    //We can handle both ADMIN AND USER
admins.fName


//    *********************************************    //

//Property exchange


type superAdmin= admin &{  //COMBINE PROPERTY OF ADMIN AND SUPERADMIN
    salary:number;
}

const superValue:superAdmin={
    fName:"akshay",
    role:"admin",
    salary:2000
}
//    *********************************************    //

// Assigning also

type multiAdmin = superAdmin



function test(data1:any){
    return data1
}


test(null)

// -------------------------------------------------------------

//Enums


// type statusCode = "pending" | "completed" | "failed"


enum statusCode{
    PENDING,
    COMPLETED,
    FAILED
}


function getStats(message : string,status:statusCode){
    console.log(message, "==" ,status)
}


getStats("12345",statusCode.COMPLETED)

//    *********************************************    //

//AS CONST


let store = "Akshay" as const;   //ACT AS CONST cannot store value once initialized

//    *********************************************    //

//KEY OF TYPE OF

const statsType={
    PENDING:"pending",
    COMPLETE:"complete",
    FAILED:"failed"
}


function getType(message : string,status:keyof typeof statsType){
    console.log(message, "==" ,status)
}

getType("12345","COMPLETE")

//    *********************************************    //

//UTILITY TYPES

type Users = {
   name:string;  //READONLY  CONST IS NOT APPLICABLE IN TYPES (ONLY VARIABLES)
    age:number
}


const datasUser:Readonly<Users>={
     name:"Ramu",
     age:22 
}


// const datasUser:Partial<Users>={   PARTIAL FOR OPTIONAL
//     name:"Ramu",
//     age:22 
// }


// const datasUser:Reqyuired<Users>={   REQUIRED 
//     name:"Ramu",
//     age:22 
// }

//    *********************************************    //


// any/unknown/never/void/null

let sample:any = "akshay"


let sample1:unknown = "akshay"  // Any value will be possible

function throwError(message:string):never{  // =>never bcoz we are expecting Nothing //USED(throws error / infinite loop)
    throw new Error(message)
}



function throwError1(message:string):void{  // =>never bcoz we are expecting Nothing //USED(No return ,to trigger inner function)
    throw new Error(message)
}


type datas={
    name:string;
    getNames :()=>number   //return number only
}



let testing:datas = {
    name:"heloo",
    getNames() {
        return 2
    },
}



let sampleValue:string | null =null




























