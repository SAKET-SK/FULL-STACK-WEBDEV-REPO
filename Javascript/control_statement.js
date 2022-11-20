//Control statement


// var age=12;

// if (age>18)
// {
//     console.log("Valid age");
// }
// else
// {
//     console.log("Invalid age");
// }

//if else ladder
// let x=0;
// if(x > 0)
// {
//     console.log("Number is positive");
// }
// else if(x<0)
//     console.log("Number is negative");
// else
//     console.log("Number is zero");

//switch is used for exact match

var errrono= 500;

switch(errrono)
{
    case 401:
        console.log("Unauthorized request");
        break;
    case 503:
        console.log("Service unavailable");
        break;
    case 410:
        console.log("Resource not available");
        break;
    default:
        console.log("Unknown error");

}
