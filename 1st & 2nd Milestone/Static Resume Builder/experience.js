var experienceList = [
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
function displayExperience(experience) {
    var section = document.querySelector('#experience .content');
    if (section) {
        section.innerHTML = experience.map(function (exp) { return "\n            <div class=\"experience-item\">\n                <h3>".concat(exp.position, " at ").concat(exp.company, "</h3>\n                <p><strong>Duration:</strong> ").concat(exp.duration, "</p>\n                <p>").concat(exp.description, "</p>\n            </div>\n        "); }).join('');
    }
}
displayExperience(experienceList);
