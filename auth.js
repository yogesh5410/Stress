function showSignIn() {
    document.getElementById("signUpForm").classList.add("hidden");
    document.getElementById("signInForm").classList.remove("hidden");
}

function showSignUp() {
    document.getElementById("signInForm").classList.add("hidden");
    document.getElementById("signUpForm").classList.remove("hidden");
}

function signUp() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    const user = { name, username, gender, age, password };
    localStorage.setItem(username, JSON.stringify(user));
    alert("Sign Up Successful! Please sign in.");
    showSignIn();
}

function signIn() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem(username));
    if (user && user.password === password) {
        localStorage.setItem("currentUser", username);
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Incorrect username or password.");
    }
}
