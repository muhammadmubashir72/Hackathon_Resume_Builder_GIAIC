
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;


form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); 

  
  const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
  const username = (document.getElementById("username") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const DateOfBirth = (document.getElementById("DateOfBirth") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;


  const resumeData = {
    name,
    email,
    phone,
    DateOfBirth,
    education,
    experience,
    skills,
  };
  localStorage.setItem(username, JSON.stringify(resumeData)); 

  
  const displayResume = (profileImageSrc: string | null) => {
    const resumeHTML = `
      <h2>Editable Resume</h2>
      <h3>Personal Information</h3>
      ${profileImageSrc ? `<img src="${profileImageSrc}" alt="Profile Picture" style="width:150px; height:150px; object-fit:cover;" />` : ""}
      <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
      <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
      <p><b>Date Of Birth:</b> <span contenteditable="true">${DateOfBirth}</span></p>
      
      <h3>Education:</h3>
      <p contenteditable:="true">${education}</p>
      
      <h3>Experience</h3>
      <p contenteditable:="true">${experience}</p>
      
      <h3>Skills</h3>
      <p contenteditable:="true">${skills}</p>
    `;

    
    resumeDisplayElement.innerHTML = resumeHTML;
  };

  
  if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      displayResume(e.target?.result as string); 
    };
    reader.readAsDataURL(profilePictureInput.files[0]);
  } else {
    displayResume(null); 
  }


  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
  
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});


downloadPdfButton.addEventListener("click", () => {
  window.print(); 
});


window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (username) {
    
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value = username;
      (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
      (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
      (document.getElementById("DateOfBirth") as HTMLInputElement).value = resumeData.DateOfBirth;
      (document.getElementById("education") as HTMLTextAreaElement).value = resumeData.education;
      (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;
      (document.getElementById("skills") as HTMLTextAreaElement).value = resumeData.skills;
    }
  }
});