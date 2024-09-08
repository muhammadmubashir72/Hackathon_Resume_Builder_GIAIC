// Get form and output container elements
const inputField = document.querySelector(".input-fields");
const outputContainer = document.querySelector(".output_container");
const form = document.getElementById('cv-form');
let isHidden = true;

// Function to validate form
function validateForm() {
    const inputs = form.querySelectorAll('input, textarea');
    const inputsArray = Array.from(inputs);
    for (const input of inputsArray) {
        if (!input.value.trim()) {
            alert('Please fill in all fields.');
            return false;
        }
    }
    return true;
}

// Function to generate the shareable link
function generateShareableLink() {
    const formData = new FormData(form);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
        params.append(key, value);
    }

    return `https://shareable-resume-builder-ubaid.vercel.app/resume-viewer.html?${params.toString()}`;
}

// Function to preview the CV
function preview() {
    if (!validateForm()) return;

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
                <button onclick="downloadPDF()">Download PDF</button>
                <button onclick="copyShareableLink()">Copy Shareable Link</button>
            </div>
            <div class="created-by">
                <p>Created by Muhammad Mubashir Saeedi</p>
            </div>
        </div>
    `;

    // Toggle view
    inputField.style.display = "none";
    outputContainer.style.display = "block";
    outputContainer.innerHTML = output;
    isHidden = false;
}

// Function to download CV as PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resumeContent = outputContainer.innerText;

    doc.text(resumeContent, 10, 10);
    doc.save('resume.pdf');
}

// Function to copy the shareable link to clipboard
function copyShareableLink() {
    const link = generateShareableLink();
    navigator.clipboard.writeText(link).then(() => {
        alert('Shareable link copied to clipboard!');
    }, () => {
        alert('Failed to copy shareable link.');
    });
}

// Function to reset the form and show the input fields
function createNewResume() {
    form.reset();
    inputField.style.display = "block";
    outputContainer.style.display = "none";
    isHidden = true;
}

// Assign functions to the `window` object to make them globally accessible
window.preview = preview;
window.downloadPDF = downloadPDF;
window.copyShareableLink = copyShareableLink;
window.createNewResume = createNewResume;
