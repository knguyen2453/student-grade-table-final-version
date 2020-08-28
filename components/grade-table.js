class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");

    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    };

    removeAllChildNodes(tbodyElement);

    for (var i = 0; i < grades.length; i++) {
      var tableRow = document.createElement("tr");

      var studentName = document.createElement("td");
      studentName.textContent = grades[i].name;

      var studentCourse = document.createElement("td");
      studentCourse.textContent = grades[i].course;

      var studentGrade = document.createElement("td");
      studentGrade.textContent = grades[i].grade;

      tableRow.append(studentName, studentCourse, studentGrade);
      tbodyElement.append(tableRow);
    }
  }
};
