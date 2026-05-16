
console.log("Script loaded successfully!");

const btn = document.getElementById("btn");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("passeword");

console.log(btn);
console.log(nom);
console.log(email);
console.log(password);

btn.addEventListener("click", function (event) {

    event.preventDefault();

    console.log("Button clicked!");
    console.log("Nom: " + nom.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);

    // Vérification nom
    if (nom.value === "") {
        alert("Nom est manquant");
        return;
    }

    // Vérification email
    if (email.value === "") {
        alert("Email est manquant");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Email doit contenir @");
        return;
    }

    // Vérification mot de passe
    if (password.value === "") {
        alert("Mot de passe est manquant");
        return;
    }

    if (password.value.length < 6) {
        alert("Mot de passe doit contenir au moins 6 caractères");
        return;
    }

    if (!/[a-z]/.test(password.value)) {
        alert("Mot de passe doit contenir une minuscule");
        return;
    }

    if (!/[A-Z]/.test(password.value)) {
        alert("Mot de passe doit contenir une majuscule");
        return;
    }

    if (!/[0-9]/.test(password.value)) {
        alert("Mot de passe doit contenir un chiffre");
        return;
    }

    // Succès
    alert(
        "Nom : " + nom.value +
        "\nEmail : " + email.value +
        "\nPassword : " + password.value
    );

    // Objet utilisateur
    const user = {
        nom: nom.value,
        email: email.value,
        password: password.value
    };

    console.log("Saved user:", user);

    // Sauvegarde localStorage
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Utilisateur sauvegardé !");
});
