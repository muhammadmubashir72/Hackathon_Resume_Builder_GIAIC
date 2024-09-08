// script.js

const inputField = document.querySelector(".input-fields");
const outputContainer = document.querySelector(".output_container");
let isHidden = true;

// Function to validate form
function validateForm() {
    const form = document.getElementById('cv-form');
    const inputs = form.querySelectorAll('input, textarea');
    for (let input of inputs) {
        if (!input.value.trim()) {
            alert('Please fill in all fields.');
            return false;
        }
    }
    return true;
}

// Function to preview the CV
function preview() {
    if (!validateForm()) return;

    const form = document.getElementById('cv-form');
    const data = new FormData(form);

    const output = `
        <div class="output">
            <div class="heading">
                <h1>${data.get('name')}</h1>
                <h4>${data.get('title')}</h4>
            </div>
            <div class="info">
                <div class="box">
                    <h2>Objective</h2>
                    <p>${data.get('objective')}</p>
                    <h2>Skills</h2>
                    <p>${data.get('skills')}</p>
                    <h2>Academic Details</h2>
                    <p>${data.get('academic_details')}</p>
                    <h2>Contact</h2>
                    <p>${data.get('contact')}</p>
                </div>
                <div class="box">
                    <h2>Work Experience</h2>
                    <p>${data.get('work_experience')}</p>
                    <h2>Achievements</h2>
                    <p>${data.get('achievements')}</p>
                    <h2>Projects</h2>
                    <p>${data.get('projects')}</p>
                </div>
            </div>
            <div class="btn">
                <button onclick="printResume()">Print Resume</button>
                <button onclick="createNewResume()">Create New Resume</button>
            </div>
            <div class="created-by">
                <p>Created by Mubashir Saeedi</p>
            </div>
        </div>
    `;

    // Toggle view
    inputField.style.display = "none";
    outputContainer.style.display = "block";
    outputContainer.innerHTML = output;
    isHidden = false;
}

function printResume() {
    window.print();
    // Optionally, you can clear the form fields here if needed
    document.getElementById('cv-form').reset();
    inputField.style.display = "block";
    outputContainer.style.display = "none";
    isHidden = true;
}

function createNewResume() {
    document.getElementById('cv-form').reset();
    inputField.style.display = "block";
    outputContainer.style.display = "none";
    isHidden = true;
}
