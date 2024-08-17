//Infer Types  (Implicit Types) =>
// let userName="Akshay"
// userName=10
//    *********************************************    //
// Defining Types (Excplicit Types) =>
var userName = "Akshay";
var age = 23;
var isVerified = true;
var skills = ["JS", "TS", "C"]; // Cant give Emplty Array(bcoz it expects empty array)
var userDetails = {
    name: "Akshay",
    age: 22
};
userDetails.age = 23;
var userDetail = {
    name: "Akshay",
    age: 22,
    salary: 100,
    getName: function () {
        console.log(this.name);
    }
};
var userData = {
    name: "Akshay",
    age: 22,
    salary: 100,
    getName: function () {
        console.log(this.name);
    }
};
var user = {
    name: 11111,
    age: 22,
    salary: 100,
};
var skill = ["JS", "TS", "C", 1, 2, 3]; // strimg and number
var user1 = {
    name: 11111,
    age: 22,
    salary: 100,
};
function getUserName(user) {
    return user.age;
}
getUserName(user1);
function getUser(user) {
    return { name: user.name, age: user.age };
}
getUser(user1);
function alldata(_a) {
    var name = _a.name, age = _a.age;
    return name;
}
alldata({ name: "akshay", age: 23 });
//    *********************************************    //
// Function Overloading
function add(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return num1 + num2;
}
add(2, 2);
function add2(num1, num2) {
    return num1 + num2;
}
add2(2, 2);
add2("2", "2");
//    *********************************************    //
//Generics
function getAge(age) {
    return age;
}
getAge("hy");
getAge(2);
var userValue = {
    name: "akshay",
    age: 23
};
var adminValue = {
    fName: "akshay",
    role: "admin"
};
function getDetails(userDetail) {
    return userDetail;
}
var users = getDetails(userValue); // Here difficult to give keys from the object bcoz keys are diff in ADMIN AND USER ---->USE GENERICS
var admins = getDetails(adminValue);
users.age; //We can handle both ADMIN AND USER
admins.fName;
var superValue = {
    fName: "akshay",
    role: "admin",
    salary: 2000
};
function test(data1) {
    return data1;
}
test(null);
// -------------------------------------------------------------
//Enums
// type statusCode = "pending" | "completed" | "failed"
var statusCode;
(function (statusCode) {
    statusCode[statusCode["PENDING"] = 0] = "PENDING";
    statusCode[statusCode["COMPLETED"] = 1] = "COMPLETED";
    statusCode[statusCode["FAILED"] = 2] = "FAILED";
})(statusCode || (statusCode = {}));
function getStats(message, status) {
    console.log(message, "==", status);
}
getStats("12345", statusCode.COMPLETED);
//    *********************************************    //
//AS CONST
var store = "Akshay"; //ACT AS CONST cannot store value once initialized
//    *********************************************    //
//KEY OF TYPE OF
var statsType = {
    PENDING: "pending",
    COMPLETE: "complete",
    FAILED: "failed"
};
function getType(message, status) {
    console.log(message, "==", statsType[status]);
}
getType("12345", "COMPLETE");
