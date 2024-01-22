function checkAge(age){
    if(age >= 18){
        console.log("you are old enough to vote.")
    }
    else{
        console.log("sorry, you must be 18 or older to vote.")
    }
}

checkAge(18)
checkAge(5)
checkAge(30)

// "***************************************************************************************"
function checkElegibility(salary){
    if(salary >= 50000){
        console.log("Elgible for Home loan and Car loan")
    }
    else if(salary < 50000 && salary >= 35000){
        console.log("Eligible for Car loan")
    }
    else {
        console.log("Not eligible for loans")
    }
}
checkElegibility(50000)
checkElegibility(35000)
checkElegibility(34999)

// "***************************************************************************************"
function checkGrade(marks){
    let grade;
    if(marks >= 90){
        grade = 'A'
    }
    else{
        if(marks >= 80){
            grade = 'B'
        }
        else{
            if(marks >= 70){
                grade = 'C'
            }
            else{
                grade = 'D'
            }
        }     
    }
    console.log(grade)
}

checkGrade(60)
checkGrade(70)
checkGrade(85)
checkGrade(91)