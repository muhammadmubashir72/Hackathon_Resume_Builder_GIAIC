// experience.ts
interface Experience {
    position: string;
    company: string;
    duration: string;
    description: string;
}

const experienceList: Experience[] = [
    { 
        position: 'Enthusiast Flutter Developer', 
        company: 'NEP-NIC', 
        duration: '2023 - 24', 
        description: 'Built and optimized mobile applications using Flutter, focusing on clean UI/UX design and high performance across iOS and Android platforms.' 
    },
    { 
        position: 'Front-End Developer', 
        company: 'Tech Solution', 
        duration: '2019 - 2021', 
        description: 'Developed and maintained company websites, focusing on responsive design and user experience.' 
    },
    { 
        position: 'Full Stack Developer', 
        company: 'Web Innovators', 
        duration: '2021 - Present', 
        description: 'Worked on various web applications, collaborating with cross-functional teams to deliver high-quality software.' 
    }
];

function displayExperience(experience: Experience[]) {
    const section = document.querySelector('#experience .content');
    if (section) {
        section.innerHTML = experience.map(exp => `
            <div class="experience-item">
                <h3>${exp.position} at ${exp.company}</h3>
                <p><strong>Duration:</strong> ${exp.duration}</p>
                <p>${exp.description}</p>
            </div>
        `).join('');
    }
}

displayExperience(experienceList);
