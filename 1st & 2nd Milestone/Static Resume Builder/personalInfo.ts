// personalInfo.ts
interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
}

const personalInfo: PersonalInfo = {
    name: 'Muhammad Mubashir',
    email: 'mubashirkhi72@gmail.com',
    phone: '+92 325 3570380',
    address: '1234 Street, Karachi, Pakistan',
    linkedin: 'https://www.linkedin.com/in/muhammad-mubashir-saeedi'
};

function displayPersonalInfo(info: PersonalInfo) {
    const section = document.querySelector('#personal-info .content');
    if (section) {
        section.innerHTML = `
            <p><strong>Name:</strong> ${info.name}</p>
            <p><strong>Email:</strong> ${info.email}</p>
            <p><strong>Phone:</strong> ${info.phone}</p>
            <p><strong>Address:</strong> ${info.address}</p>
            <p><strong>LinkedIn:</strong> <a href="${info.linkedin}" target="_blank">${info.linkedin}</a></p>
        `;
    }
}

displayPersonalInfo(personalInfo);
