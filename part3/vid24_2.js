// switch 
// switch (expression) {
//     case value1:
//         // code to be executed if expression === value1
//         break;
//     case value2:
//         // code to be executed if expression === value2
//         break;
//     ...
//     default:
//         // code to be executed if expression doesn't match any case
// }

const month = "march";

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;
                                   // break , breaks the control flow otherwise if there is no break then flow will continue and it will show all the cases after the matched case until it finds a break or end of switch statement
    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case match");  
        break;
}

