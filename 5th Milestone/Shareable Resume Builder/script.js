function generateCV() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const personalInfo = document.getElementById('personal-info').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;

    // Fill in the resume container with user inputs
    const resumeContent = `
        <div class="resume-header">
            <div class="header-content">
                <h1>${firstName} ${lastName}</h1>
                <p>Phone: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Address: ${address}</p>
            </div>
        </div>
        <div class="resume-section">
            <h2>Personal Information</h2>
            <p>${personalInfo}</p>
        </div>
        <div class="resume-section">
            <h2>Education</h2>
            <p>${education}</p>
        </div>
        <div class="resume-section">
            <h2>Experience</h2>
            <p>${experience}</p>
        </div>
        <div class="resume-section">
            <h2>Skills</h2>
            <p>${skills}</p>
        </div>
        <div class="resume-section">
            <h2>Certifications</h2>
            <p>${certifications}</p>
        </div>
    `;
    document.getElementById('resume-container').innerHTML = resumeContent;
    document.getElementById('resume-container').style.display = 'block';
}

function downloadPDF() {
    const resumeContainer = document.getElementById('resume-container');
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(resumeContainer).save();
}

function copyLink() {
    const link = "http://example.com/your-resume-link"; // Replace with actual link
    navigator.clipboard.writeText(link)
        .then(() => alert("Shareable link copied!"))
        .catch(err => console.error("Failed to copy link: ", err));
}
