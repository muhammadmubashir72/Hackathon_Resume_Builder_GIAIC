// script.ts

// Define types for form elements and their values
interface FormElements {
    name: HTMLInputElement;
    title: HTMLInputElement;
    objective: HTMLTextAreaElement;
    skills: HTMLTextAreaElement;
    academic_details: HTMLTextAreaElement;
    contact: HTMLInputElement;
    work_experience: HTMLTextAreaElement;
    achievements: HTMLTextAreaElement;
    projects: HTMLTextAreaElement;
}

// Get form and output container elements
const inputField = document.querySelector(".input-fields") as HTMLElement;
const outputContainer = document.querySelector(".output_container") as HTMLElement;
const form = document.getElementById('cv-form') as HTMLFormElement;

let isHidden = true;

function validateForm(): boolean {
    const inputs = form.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

    // Convert NodeList to array using Array.prototype.slice
    const inputsArray = Array.prototype.slice.call(inputs);

    // Check for empty fields
    for (const input of inputsArray) {
        if (!input.value.trim()) {
            alert('Please fill in all fields.');
            return false;
        }
    }

    return true;
}

function preview(): void {
    try {
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
                    <button onclick="printResume()">Print Resume</button>
                    <button onclick="editResume()">Edit Resume</button>
                </div>
            </div>
        `;

        inputField.style.display = "none";
        outputContainer.style.display = "block";
        outputContainer.innerHTML = output;
        isHidden = false;
    } catch (error) {
        console.error(error);
    }
}

function printResume(): void {
    window.print();
}

function editResume(): void {
    inputField.style.display = "block";
    outputContainer.style.display = "none";
    isHidden = true;
}

// Assign functions to the `window` object to make them globally accessible
(window as any).printResume = printResume;
(window as any).editResume = editResume;
