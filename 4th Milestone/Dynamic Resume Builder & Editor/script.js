// script.ts
// Get form and output container elements
var inputField = document.querySelector(".input-fields");
var outputContainer = document.querySelector(".output_container");
var form = document.getElementById('cv-form');
var isHidden = true;
function validateForm() {
    var inputs = form.querySelectorAll('input, textarea');
    // Convert NodeList to array using Array.prototype.slice
    var inputsArray = Array.prototype.slice.call(inputs);
    // Check for empty fields
    for (var _i = 0, inputsArray_1 = inputsArray; _i < inputsArray_1.length; _i++) {
        var input = inputsArray_1[_i];
        if (!input.value.trim()) {
            alert('Please fill in all fields.');
            return false;
        }
    }
    return true;
}
function preview() {
    try {
        if (!validateForm())
            return;
        var data = new FormData(form);
        var output = "\n            <div class=\"output\">\n                <div class=\"heading\">\n                    <h1>".concat(data.get('name'), "</h1>\n                    <h4>").concat(data.get('title'), "</h4>\n                </div>\n                <div class=\"info\">\n                    <div class=\"box\">\n                        <h2>Objective</h2>\n                        <p>").concat(data.get('objective'), "</p>\n                        <h2>Skills</h2>\n                        <p>").concat(data.get('skills'), "</p>\n                        <h2>Academic Details</h2>\n                        <p>").concat(data.get('academic_details'), "</p>\n                        <h2>Contact</h2>\n                        <p>").concat(data.get('contact'), "</p>\n                    </div>\n                    <div class=\"box\">\n                        <h2>Work Experience</h2>\n                        <p>").concat(data.get('work_experience'), "</p>\n                        <h2>Achievements</h2>\n                        <p>").concat(data.get('achievements'), "</p>\n                        <h2>Projects</h2>\n                        <p>").concat(data.get('projects'), "</p>\n                    </div>\n                </div>\n                <div class=\"btn\">\n                    <button onclick=\"printResume()\">Print Resume</button>\n                    <button onclick=\"editResume()\">Edit Resume</button>\n                </div>\n            </div>\n        ");
        inputField.style.display = "none";
        outputContainer.style.display = "block";
        outputContainer.innerHTML = output;
        isHidden = false;
    }
    catch (error) {
        console.error(error);
    }
}
function printResume() {
    window.print();
}
function editResume() {
    inputField.style.display = "block";
    outputContainer.style.display = "none";
    isHidden = true;
}
// Assign functions to the `window` object to make them globally accessible
window.printResume = printResume;
window.editResume = editResume;
