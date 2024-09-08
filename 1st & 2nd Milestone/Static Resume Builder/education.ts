// education.ts
interface Education {
    degree: string;
    institution: string;
    year: string;
}

const educationList: Education[] = [
    { degree: 'Bachelor of Science in Software Engineering', institution: 'Sindh Madressatul Islam University', year: '2022 - 2026' },
    { degree: 'Intermediate of Pre Engineering', institution: 'Govt Jinnah College', year: '2019 - 2021' },
    { degree: 'Matriculation of Science', institution: 'Prince Public Sec School', year: '2017 - 2019' }
];

function displayEducation(education: Education[]) {
    const section = document.querySelector('#education .content');
    if (section) {
        section.innerHTML = education.map(edu => `
            <p><strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})</p>
        `).join('');
    }
}

displayEducation(educationList);
