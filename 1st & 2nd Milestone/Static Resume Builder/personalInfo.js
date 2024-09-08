var personalInfo = {
    name: 'Muhammad Mubashir',
    email: 'mubashirkhi72@gmail.com',
    phone: '+92 325 3570380',
    address: '1234 Street, Karachi, Pakistan',
    linkedin: 'https://www.linkedin.com/in/muhammad-mubashir-saeedi'
};
function displayPersonalInfo(info) {
    var section = document.querySelector('#personal-info .content');
    if (section) {
        section.innerHTML = "\n            <p><strong>Name:</strong> ".concat(info.name, "</p>\n            <p><strong>Email:</strong> ").concat(info.email, "</p>\n            <p><strong>Phone:</strong> ").concat(info.phone, "</p>\n            <p><strong>Address:</strong> ").concat(info.address, "</p>\n            <p><strong>LinkedIn:</strong> <a href=\"").concat(info.linkedin, "\" target=\"_blank\">").concat(info.linkedin, "</a></p>\n        ");
    }
}
displayPersonalInfo(personalInfo);
