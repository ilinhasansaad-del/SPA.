const bangla = document.getElementById("bangla");
const english = document.getElementById("english");
const higherMath = document.getElementById("hm");
const physics = document.getElementById("physics");
const chemistry = document.getElementById("chemistry");
const biology = document.getElementById("bio");
const button = document.getElementById("btn");
// student info
const name = document.getElementById("student-name");
const studentRollInput = document.getElementById("rollInput");
const average = document.getElementById("average");
const grade = document.getElementById("grade");
const status = document.getElementById("status");
const roll = document.getElementById("roll");
//student input
const studentNameInput = document.getElementById("studentName");
//students markss
const banglaMark = Number(bangla.value);
const englishMark = Number(english.value);
const higherMathMark = Number(higherMath.value);
const physicsMark = Number(physics.value);
const chemistryMark = Number(chemistry.value);
const biologyMark = Number(biology.value);
//total
const total = document.getElementById("total-marks");

button.addEventListener("click", function() {
    const totalMarks = Number(bangla.value) + Number(english.value) + Number(higherMath.value) + Number(physics.value) + Number(chemistry.value) + Number(biology.value);
    console.log(totalMarks);

    const avgMarks = totalMarks/6;
    console.log(avgMarks);

    if (avgMarks >= 80) {
    grade.textContent = "A+";
} else if (avgMarks >= 70 && avgMarks <= 80) {
    grade.textContent = "A";
} else if (avgMarks >= 60 && avgMarks <= 70){
    grade.textContent = "A-";
} else if (avgMarks >= 50 && avgMarks <= 60) {
    grade.textContent = "B";
} else if (avgMarks >= 40 && avgMarks <= 50) {
    grade.textContent = "C";
} else if (avgMarks >=33 && avgMarks <= 40) {
    grade.textContent = "D";
} else {
    grade.textContent = "Fail ! 🤦‍♂️🤦‍♀️"
}

average.textContent = avgMarks;

name.textContent = studentNameInput.value;

roll.textContent = studentRollInput.value;

total.textContent = totalMarks;

if (avgMarks >= 33) {
    status.textContent = "pass 👍";
} else {
    status.textContent = "Fail 🤦‍♂️"
}

});





