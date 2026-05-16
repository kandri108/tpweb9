
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("passeword");
const button = document.querySelector("button");

console.log(nom);
console.log(email);
console.log(password);
console.log(button);


button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});