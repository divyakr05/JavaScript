// it will jump directly to respective case, not like if-else checking each condition. 
// So performance is much better than if-else
function checkDayOfWeek(dayNumber){
    let day;

    switch (dayNumber) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            console.log("Invalid input")
            break;
    }
    return day;
}

console.log(checkDayOfWeek(3))
console.log(checkDayOfWeek(7))
console.log(checkDayOfWeek(0))

// "***************************************************************************************"
let browser = "chrome";
switch (browser) {
    case "chrome":
        console.log("launch chrome")
        break;
    case "firefox":
        console.log("launch firefox")
        break;
    case "edge":
        console.log("launch edge")
        break;
    default:
        console.log("unsupported browser")
        break;
}