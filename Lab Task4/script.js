const maxAttempts = 4;
let currentAttempts = 0;

function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let hasUsernameError = true;
  let hasPasswordError = true;

  if (!username) {

    document.getElementById("userError").innerHTML =
      "Username is required";
    document.getElementById("userError").style.color = "red";
    hasUsernameError = true;

  } else if (username.length < 3) {

    document.getElementById("userError").innerHTML =
      "Username must be at least 3 char long";
    document.getElementById("userError").style.color = "red";
    hasUsernameError = true;

  } else {

    document.getElementById("userError").innerHTML = "";
    hasUsernameError = false;

  }


  if (!password) {

    document.getElementById("passError").innerHTML =
      "Password is required";
    document.getElementById("passError").style.color = "red";
    hasPasswordError = true;

  } else if (password.length < 6) {

    document.getElementById("passError").innerHTML =
      "Password must be at least 6 char long";
    document.getElementById("passError").style.color = "red";
    hasPasswordError = true;

  } else {

    document.getElementById("passError").innerHTML = "";
    hasPasswordError = false;

  }


  if (!hasUsernameError && !hasPasswordError) {

    if (username == "aiub" && password == "student") {

      currentAttempts = 0;

      alert("Login Successful");

    } else {

      currentAttempts++;

      if (currentAttempts >= maxAttempts) {

        alert("You are locked for next 5 minutes");

      } else {

        let leftAttempt = maxAttempts - currentAttempts;

        alert("You have " + leftAttempt + " attempts left");

      }

    }

  }

  return false;
}