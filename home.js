document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("currentUser");
    if (username) {
        document.getElementById("displayUsername").textContent = username;
    }
});

function navigateTo(page) {
    window.location.href = page;
}
