// In any .js file or in a new script tag in index.html
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('expanded');
}
