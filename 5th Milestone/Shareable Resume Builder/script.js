    var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var profilePictureInput = document.getElementById("profile-picture");
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var DateOfBirth = document.getElementById("DateOfBirth").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        DateOfBirth: DateOfBirth,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var displayResume = function (profileImageSrc) {
        var resumeHTML = "\n      <h2>Editable Resume</h2>\n      <h3>Personal Information</h3>\n      ".concat(profileImageSrc ? "<img src=\"".concat(profileImageSrc, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; object-fit:cover;\" />") : "", "\n      <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n      <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n      <p><b>Date Of Birth:</b> <span contenteditable=\"true\">").concat(DateOfBirth, "</span></p>\n      \n      <h3>Education:</h3>\n      <p contenteditable:=\"true\">").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p contenteditable:=\"true\">").concat(experience, "</p>\n      \n      <h3>Skills</h3>\n      <p contenteditable:=\"true\">").concat(skills, "</p>\n    ");
        resumeDisplayElement.innerHTML = resumeHTML;
    };
    if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayResume((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(null);
    }
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value = username;
            document.getElementById("name").value = resumeData.name;
            document.getElementById("email").value = resumeData.email;
            document.getElementById("phone").value = resumeData.phone;
            document.getElementById("DateOfBirth").value = resumeData.DateOfBirth;
            document.getElementById("education").value = resumeData.education;
            document.getElementById("experience").value = resumeData.experience;
            document.getElementById("skills").value = resumeData.skills;
        }
    }
});