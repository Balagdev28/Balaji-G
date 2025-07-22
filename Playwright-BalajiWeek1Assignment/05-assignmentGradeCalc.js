const studMark = 73

function gradeCalc(studMark){
    let grade;

    switch(true){
        case (studMark>=90 && studMark<=100):
        grade = 'A+'
        break;
        case (studMark>=80 && studMark <90):
        grade = 'A'
        break;
        case (studMark>=70 && studMark <80):
        grade = 'B'
        break;
        case (studMark>=60 && studMark <70):
        grade = 'C'
        break;
        case (studMark>=45 && studMark <60):
        grade = 'D'
        break;
        case (studMark>=44 || studMark === 0):
        grade = 'F'
        break;
        default:
        grade = "Invalid mark has been entered"
    }
return grade;
}

const studGrade = gradeCalc(studMark)
console.log("Student mark in the exam is:" +studMark)
console.log("Student grade in the exam is:" +studGrade)
