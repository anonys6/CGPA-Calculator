function createTable() {
    var numCourses = document.getElementById("numCourses").value;
    var tableDiv = document.getElementById("tableDiv");
    tableDiv.innerHTML = "";

    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    var courseNameHeader = document.createElement("th");
    courseNameHeader.innerHTML = "Course Name";
    var courseHeader = document.createElement("th");
    courseHeader.innerHTML = "Course";
    var creditHeader = document.createElement("th");
    creditHeader.innerHTML = "Credit";
    var gradeHeader = document.createElement("th");
    gradeHeader.innerHTML = "Grade";
    var gradeValueHeader = document.createElement("th");
    gradeValueHeader.innerHTML = "Grade Value";
    var improvedGradeHeader = document.createElement("th");
    improvedGradeHeader.innerHTML = "Improved Grade";
    var improvedGradeValueHeader = document.createElement("th");
    improvedGradeValueHeader.innerHTML = "Improved Grade Value";
    headerRow.appendChild(courseNameHeader);
    headerRow.appendChild(courseHeader);
    headerRow.appendChild(creditHeader);
    headerRow.appendChild(gradeHeader);
    headerRow.appendChild(gradeValueHeader);
    headerRow.appendChild(improvedGradeHeader);
    headerRow.appendChild(improvedGradeValueHeader);
    table.appendChild(headerRow);

    for (var i = 0; i < numCourses; i++) {
        var row = document.createElement("tr");

        var courseNameCell = document.createElement("td");
        var courseNameInput = document.createElement("input");
        courseNameInput.type = "text";
        courseNameInput.id = "courseName" + i;
        courseNameCell.appendChild(courseNameInput);
        row.appendChild(courseNameCell);

        var courseCell = document.createElement("td");
        courseCell.innerHTML = "Course " + (i + 1);
        row.appendChild(courseCell);

        var creditCell = document.createElement("td");
        var creditInput = document.createElement("input");
        creditInput.type = "number";
        creditInput.id = "credit" + i;
        creditInput.value = "4";
        creditCell.appendChild(creditInput);
        row.appendChild(creditCell);

        var gradeCell = document.createElement("td");
        var gradeInput = document.createElement("input");
        gradeInput.type = "text";
        gradeInput.id = "grade" + i;
        gradeInput.value = "O";
        gradeInput.oninput = calculateCGPA;
        gradeCell.appendChild(gradeInput);
        row.appendChild(gradeCell);

        var gradeValueCell = document.createElement("td");
        gradeValueCell.id = "gradeValue" + i;
        row.appendChild(gradeValueCell);

        var improvedGradeCell = document.createElement("td");
        var improvedGradeInput = document.createElement("input");
        improvedGradeInput.type = "text";
        improvedGradeInput.id = "improvedGrade" + i;
        improvedGradeInput.value = "O";
        improvedGradeInput.oninput = calculateCGPA;
        improvedGradeCell.appendChild(improvedGradeInput);
        row.appendChild(improvedGradeCell);

        var improvedGradeValueCell = document.createElement("td");
        improvedGradeValueCell.id = "improvedGradeValue" + i;
        row.appendChild(improvedGradeValueCell);

        table.appendChild(row);
    }

    tableDiv.appendChild(table);
    calculateCGPA();
}

function calculateCGPA() {
    var numCourses = document.getElementById("numCourses").value;
    var creditProduct = 0;
    var improvedCreditProduct = 0;
    var creditSum = 0;

    for (var i = 0; i < numCourses; i++) {
        var credit = document.getElementById("credit" + i).value;
        var grade = document.getElementById("grade" + i).value;
        var improvedGrade = document.getElementById("improvedGrade" + i).value;
        var gradeValue;
        var improvedGradeValue;

        if (grade == "O" || grade == "o") {
            gradeValue = 10;
        } else if (grade == "A+" || grade == "a+") {
            gradeValue = 9;
        } else if (grade == "A" || grade == "a") {
            gradeValue = 8;
        } else if (grade == "B+" || grade == "b+") {
            gradeValue = 7;
        } else if (grade == "B" || grade == "b") {
            gradeValue = 6;
        } else if (grade == "C" || grade == "c") {
            gradeValue = 5;
        } else if (grade == "D" || grade == "d") {
            gradeValue = 4;
        } else if (grade == "E" || grade == "e") {
            gradeValue = 0;
        } else {
            gradeValue = "Invalid grade";
        }

        if (improvedGrade == "O" || improvedGrade == "o") {
            improvedGradeValue = 10;
        } else if (improvedGrade == "A+" || improvedGrade == "a+") {
            improvedGradeValue = 9;
        } else if (improvedGrade == "A" || improvedGrade == "a") {
            improvedGradeValue = 8;
        } else if (improvedGrade == "B+" || improvedGrade == "b+") {
            improvedGradeValue = 7;
        } else if (improvedGrade == "B" || improvedGrade == "b") {
            improvedGradeValue = 6;
        } else if (improvedGrade == "C" || improvedGrade == "c") {
            improvedGradeValue = 5;
        } else if (improvedGrade == "D" || improvedGrade == "d") {
            improvedGradeValue = 4;
        } else if (improvedGrade == "E" || improvedGrade == "e") {
            improvedGradeValue = 0;
        } else {
            improvedGradeValue = "Invalid grade";
        }

        document.getElementById("gradeValue" + i).innerHTML = gradeValue;
        document.getElementById("improvedGradeValue" + i).innerHTML = improvedGradeValue;

        if (typeof gradeValue == "number") {
            creditProduct += credit * gradeValue;
        }
        if (typeof improvedGradeValue == "number") {
            improvedCreditProduct += credit * improvedGradeValue;
        }
        creditSum += parseInt(credit);
    }

    var cgpa = creditProduct / creditSum;
    var improvedCgpa = improvedCreditProduct / creditSum;
    document.getElementById("cgpa").innerHTML = "CGPA: " + cgpa;
    document.getElementById("improvedCgpa").innerHTML = "Improved CGPA: " + improvedCgpa;
}


function exportData() {
    var numCourses = document.getElementById("numCourses").value;
    var data = [];

    for (var i = 0; i < numCourses; i++) {
        var courseName = document.getElementById("courseName" + i).value;
        var credit = document.getElementById("credit" + i).value;
        var grade = document.getElementById("grade" + i).value;
        var improvedGrade = document.getElementById("improvedGrade" + i).value;

        data.push({
            courseName: courseName,
            credit: credit,
            grade: grade,
            improvedGrade: improvedGrade
        });
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData() {
    var file = document.getElementById("importFile").files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = JSON.parse(e.target.result);
        document.getElementById("numCourses").value = data.length;
        createTable();

        for (var i = 0; i < data.length; i++) {
            document.getElementById("courseName" + i).value = data[i].courseName;
            document.getElementById("credit" + i).value = data[i].credit;
            document.getElementById("grade" + i).value = data[i].grade;
            document.getElementById("improvedGrade" + i).value = data[i].improvedGrade;
        }

        calculateCGPA();
    };
    reader.readAsText(file);
}

createTable();