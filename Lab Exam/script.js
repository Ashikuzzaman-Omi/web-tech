function registerStudent() {

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const sid = document.getElementById("sid").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

    let hasError = false;

    if (!fname) {
        document.getElementById("fnameError").innerHTML = "First Name is required";
        hasError = true;
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }

    if (!lname) {
        document.getElementById("lnameError").innerHTML = "Last Name is required";
        hasError = true;
    } else {
        document.getElementById("lnameError").innerHTML = "";
    }

    if (!sid) {
        document.getElementById("sidError").innerHTML = "Student ID is required";
        hasError = true;
    }
    else if (!sid.includes("-")) {
        document.getElementById("sidError").innerHTML = "Student ID must contain -";
        hasError = true;
    }
    else {
        document.getElementById("sidError").innerHTML = "";
    }

    if (!email) {
        document.getElementById("emailError").innerHTML = "Email is required";
        hasError = true;
    }
    else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        hasError = true;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (credit == "") {
        document.getElementById("creditError").innerHTML = "Credit is required";
        hasError = true;
    }
    else if (credit < 0 || credit >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be between 0 and 147";
        hasError = true;
    }
    else {
        document.getElementById("creditError").innerHTML = "";
    }

    if (!department) {
        document.getElementById("departmentError").innerHTML = "Department is required";
        hasError = true;
    }
    else {
        document.getElementById("departmentError").innerHTML = "";
    }

    if (!hasError) {

        const table = document.getElementById("studentTable");

        let row = table.insertRow(-1);

        row.insertCell(0).innerHTML = fname;
        row.insertCell(1).innerHTML = lname;
        row.insertCell(2).innerHTML = sid;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = credit;
        row.insertCell(5).innerHTML = department;

        document.forms[0].reset();
    }

    return false;
}