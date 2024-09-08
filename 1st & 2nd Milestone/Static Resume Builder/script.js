// script.js
document.getElementById('toggle-theme').addEventListener('click', function() {
    const body = document.body;
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        this.textContent = 'Switch to Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        this.textContent = 'Switch to Light Mode';
    }
});

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.content');
    if (content) {
        section.classList.toggle('expanded');
    }
}
