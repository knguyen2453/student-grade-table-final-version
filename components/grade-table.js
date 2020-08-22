class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    this.tableElement = document.querySelector("tbody");
      for (var i = 0; i < grades.length; i++) {
        var tableRow = document.createElement("tr");

        var studentName = document.createElement("td");
        studentName.textContent = grades[i].name;

        var studentCourse = document.createElement("td");
        studentCourse.textContent = grades[i].course;

        var studentGrade = document.createElement("td");
        studentGrade.textContent = grades[i].grade;

        tableRow.append(studentName, studentCourse, studentGrade);
        this.tableElement.append(tableRow);
      }
    }
  }
