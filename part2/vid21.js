// ***************************THIS and arrow function*****************************************



// ?????????????  NOTE :- THE GLOBAL OBJECT INSIDE THE BROWSER IS CALLED WINDOW OBJECT 



const user = {
    username: "hiren",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="raghu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hiren"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hiren"
//     console.log(this.username);
// }

// const chai =  () => {
    // let username = "hiren"
    // console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {    // when curly bracket is used return keyword in absolute necessary
    // return num1 +num2              // explicit return
// }

// const addTwo = (num1, num2) => return num1 +num2  // Implicit return

// const addTwo = (num1, num2) => ( num1 +num2 ) // when parenthesis used no need to write return keyword

const addTwo = (num1, num2) => ({username: "hiren"} )

console.log(addTwo(6, 9))


// const myArray.forEach(() => ())
