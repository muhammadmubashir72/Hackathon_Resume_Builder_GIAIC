var educationList = [
    { degree: 'Bachelor of Science in Software Engineering', institution: 'Sindh Madressatul Islam University', year: '2022 - 2026' },
    { degree: 'Intermediate of Pre Engineering', institution: 'Govt Jinnah College', year: '2019 - 2021' },
    { degree: 'Matriculation of Science', institution: 'Prince Public Sec School', year: '2017 - 2019' }
];
function displayEducation(education) {
    var section = document.querySelector('#education .content');
    if (section) {
        section.innerHTML = education.map(function (edu) { return "\n            <p><strong>".concat(edu.degree, "</strong> - ").concat(edu.institution, " (").concat(edu.year, ")</p>\n        "); }).join('');
    }
}
displayEducation(educationList);
