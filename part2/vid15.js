// const tinderUser = new Object() // singleton object
const tinderUser = {}// non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@xyz.com",
    fullname: {
        userfullName:  {
           firstName: "hiren ",
            lastName: "dadhwal"
        }
    }
}

// console.log(regularUser.fullname);

// console.log(regularUser.fullname.userfullName.firstName);
// console.log(regularUser?.fullname?.userfullName?.firstName);// optional chaining

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}


// const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2} // spread operator
console.log(obj3);


const users = [
    {
    },
    {
    },
]

users[1].email 
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));