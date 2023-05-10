

function signup(e) {
    event.preventDefault();
    let userName = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let User = {
        userName: userName,
        email: email,
        password: password,
    }


    let json = JSON.stringify(User);
    localStorage.setItem(userName, json);
    alert("Sign Up Success!");

    window.location.href = "login.html";
}


function login(e) {
    event.preventDefault();
    let userName = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let user = localStorage.getItem(userName);
    let data = JSON.parse(user);
    if (user == null) {
        alert("Please enter information!")
    }
    else if (userName == data.userName && password == data.password) {
        
        window.location.href = "home.html";
        let is_login = true;
        // let Login = JSON.stringify(is_login);
        localStorage.setItem("isLogin", is_login);
    }
    else {
        alert("Login Fail!!");
    }
}

const userIcon = document.querySelector(".user-icon");
const userButton = document.querySelector(".user-buttons");
        if (localStorage.getItem("isLogin") === "true") {
            userButton.style.display = "none";
            userIcon.style.display = "block";
        }
