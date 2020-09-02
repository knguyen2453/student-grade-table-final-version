class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    if (grades.length === 0) {
      var pElement = this.noGradesElement;
      pElement.classList.remove("d-none");

      var tbodyElement = this.tableElement.querySelector("tbody");

      function removeAllChildNodes(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      };

      removeAllChildNodes(tbodyElement);

    } else {

      if (grades.length !== 0) {
        var pElement = this.noGradesElement;
        pElement.classList.add("d-none");
      };

      var tbodyElement = this.tableElement.querySelector("tbody");

      function removeAllChildNodes(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      };

      removeAllChildNodes(tbodyElement);

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
    deleteButton.innerHTML = "DELETE";
    deleteButton.className = ".btn btn-danger";
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id);
    });

    newOperations.append(deleteButton);

    newTableRow.append(newName, newCourse, newGrade, newOperations);

    return newTableRow;
  }
};
