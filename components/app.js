class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var totalGrade = 0;
    var averageGrade = 0;

    for(var i = 0; i < grades.length; i++) {
      totalGrade += grades[i].grade;
    };

    averageGrade = totalGrade/grades.length;

    this.pageHeader.updateAverage(averageGrade);
  }
  getGrades() {
    $.ajax ({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "UOqypruI"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  createGrade(name, course, grade) {

    $.ajax ({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "UOqypruI"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();

    this.gradeForm.onSubmit(this.createGrade);
  }
}
