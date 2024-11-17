document.addEventListener("DOMContentLoaded", loadProfile);

function loadProfile() {
    const profileInfo = JSON.parse(localStorage.getItem("userProfile"));
    document.getElementById("profileInfo").innerHTML = `
        <p>Name: ${profileInfo.name}</p>
        <p>Username: ${profileInfo.username}</p>
        <p>Gender: ${profileInfo.gender}</p>
        <p>Age: ${profileInfo.age}</p>
    `;
}

function editProfile() {
    window.location.href = "edit_profile.html";
}

function viewStreak() {
    alert("Current streak: 5 days"); // Placeholder for streak functionality
}

function setLanguage() {
    const language = document.getElementById("languageSelect").value;
    localStorage.setItem("language", language);
    alert("Language set to " + language);
}
