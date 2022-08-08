// get elements
let form = document.getElementById("form");
let firstname = document.getElementById("first_Name");
let lastname = document.getElementById("last_Name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let image = document.getElementById("image");
let divimage= document.getElementById("imagediv")
let result = document.getElementById("result")

// addEventListeners
form.addEventListener("submit", form_submit);
firstname.addEventListener('change', firstname_func);
lastname.addEventListener("change", lastname_func);
username.addEventListener("change", username_func);
email.addEventListener("change", email_func);
password.addEventListener("change", password_func);
image.addEventListener("change", image_func);

// all functions
function firstname_func (e) {
    let fname = e.target.value;
    console.log(fname)
}
function lastname_func (e) {
    let lname = e.target.value;
    console.log(lname)
}
function username_func(e) {
    let user = e.target.value;
    console.log(user);
}
function email_func(e) {
    let email = e.target.value;
    console.log(email);
}
function password_func(e) {
    let password = e.target.value;
    console.log(password);
}
function image_func(e) {
    let image = e.target.value;
}
function form_submit(e) {
    // get values
    let values = [firstname.value, lastname.value, username.value, email.value, password.value, image.value]

    // create result heading
    let info = document.createElement("h2")
    info.innerHTML = "Your Info";
    info.style.textAlign = "center";
    info.style.marginBottom = "20px";
    result.appendChild(info);

    // create all infos
    let firstname2 = document.createElement("h5");
    firstname2.innerHTML = "First Name: " + firstname.value;
    firstname2.style.marginBottom = "5px";
    result.appendChild(firstname2);
    let lastname2 = document.createElement("h5");
    lastname2.innerHTML = "Last Name: " + lastname.value;
    lastname2.style.marginBottom = "5px";
    result.appendChild(lastname2);
    let username2 = document.createElement("h5");
    username2.innerHTML = "Username: " + username.value;
    username2.style.marginBottom = "5px";
    result.appendChild(username2);
    let email2 = document.createElement("h5");
    email2.innerHTML = "Email: " + email.value;
    email2.style.marginBottom = "5px";
    result.appendChild(email2);
    let password2 = document.createElement("h5");
    password2.innerHTML = "Password: " + password.value;
    result.appendChild(password2);
    let img = document.createElement("img");
    img.src = image.value;
    divimage.appendChild(img)

    e.preventDefault()
    console.log(values)
}



