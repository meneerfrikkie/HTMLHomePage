document.addEventListener("DOMContentLoaded", function() {
    const enterWebsiteBtn = document.getElementById("enterWebsite");
    const containerDiv = document.getElementById("container");
    const accountDiv = document.getElementById("accountDiv");

    enterWebsiteBtn.addEventListener("click", function() {
        console.log("Button clicked");

        // Show the container div
        containerDiv.style.display = "none";
        
        // Show the account div
        accountDiv.style.display = "block";

        // Add dynamic content to the account div
        accountDiv.innerHTML = `
            <h2>Welcome!</h2>
            <div class="btn-container">
                <button id="loginGuestBtn" class="btn-start">Login as Guest</button>
                <button id="loginBtn" class="btn-start">Login</button>
                <button id="signupBtn" class="btn-start">Sign Up</button>
                <button id="goBackBtn" class="btn-start">Return</button>
            </div>
        `;

        // Apply container styles to account div
        accountDiv.classList.add("container");

        // Add event listeners for the buttons in the account div
        const loginGuestBtn = document.getElementById("loginGuestBtn");
        const loginBtn = document.getElementById("loginBtn");
        const signupBtn = document.getElementById("signupBtn");
        const goBackBtn = document.getElementById("goBackBtn");

        loginGuestBtn.addEventListener("click", function() {
            // Handle login as guest action
            alert("Login as Guest clicked");
        });

        loginBtn.addEventListener("click", function() {
            // Handle login action
            alert("Login clicked");
        });

        signupBtn.addEventListener("click", function() {
            // Handle signup action
            alert("Sign Up clicked");
        });

        goBackBtn.addEventListener("click", function() {
            // Show the container div
            containerDiv.style.display = "block";
            
            // Hide the account div
            accountDiv.style.display = "none";
        });
    });
});
