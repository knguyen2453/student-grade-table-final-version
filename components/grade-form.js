class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    var nameData = formData.get("name");
    var courseData = formData.get("course");
    var gradeData = formData.get("grade");

    this.createGrade(nameData, courseData, gradeData);

    event.target.reset();
  }
}
