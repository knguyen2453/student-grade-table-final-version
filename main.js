var pElement = document.querySelector("p");

var formElement = document.querySelector("form");
var gradeForm = new GradeForm(formElement);

var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);

var tableElement = document.getElementById("grade-table");
var gradeTable = new GradeTable(tableElement, pElement);

var app = new App(gradeTable, pageHeader, gradeForm);

app.start();
