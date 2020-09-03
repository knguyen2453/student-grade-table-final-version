class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var pElement = this.noGradesElement;

    var tbodyElement = this.tableElement.querySelector("tbody");

    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    };

    removeAllChildNodes(tbodyElement);

    if (grades.length === 0) {
      pElement.classList.remove("d-none");
    } else {
      pElement.classList.add("d-none");

      for (var i = 0; i < grades.length; i++) {
        var data = grades[i];

        var tableRow = this.renderGradeRow(data, this.deleteGrade);

        tbodyElement.append(tableRow);
      };
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var newTableRow = document.createElement("tr");

    var newName = document.createElement("td");
    newName.textContent = data.name;

    var newCourse = document.createElement("td");
    newCourse.textContent = data.course;

    var newGrade = document.createElement("td");
    newGrade.textContent = data.grade;

    var newOperations = document.createElement("td");

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.className = ".btn btn-danger";
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id);
    });

    newOperations.append(deleteButton);

    newTableRow.append(newName, newCourse, newGrade, newOperations);

    return newTableRow;
  }
};
