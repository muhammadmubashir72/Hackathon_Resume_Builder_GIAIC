import jsPDF from 'jspdf';  // Ensure jsPDF and its types are installed

const inputField = document.querySelector(".input-fields") as HTMLElement;
const outputContainer = document.querySelector(".output_container") as HTMLElement;
const form = document.getElementById('cv-form') as HTMLFormElement;

function validateForm(): boolean {
    const inputs = form.querySelectorAll('input, textarea');
    const inputsArray = Array.from(inputs) as (HTMLInputElement | HTMLTextAreaElement)[];
    
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
                    <button onclick="downloadPDF()">Download PDF</button>
                    <button onclick="copyShareableLink()">Copy Shareable Link</button>
                </div>
                <div class="created-by">
                    <p>Created by Muhammad Mubashir Saeedi</p>
                </div>
            </div>
        `;

        inputField.style.display = "none";
        outputContainer.style.display = "block";
        outputContainer.innerHTML = output;
    } catch (error) {
        console.error(error);
    }
}

function downloadPDF(): void {
    const doc = new jsPDF();
    const outputElement = outputContainer.querySelector('.output') as HTMLElement;
    
    if (outputElement) {
        const pdfContent = outputElement.textContent || '';
        doc.text(pdfContent, 10, 10);
        doc.save('resume.pdf');
    }
}

function copyShareableLink(): void {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert('Shareable link copied to clipboard!');
    }, (err) => {
        console.error('Failed to copy link: ', err);
    });
}

(window as any).preview = preview;
(window as any).downloadPDF = downloadPDF;
(window as any).copyShareableLink = copyShareableLink;
