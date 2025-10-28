document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === "usuario@demo.com" && password === "1234") {
    alert("Inicio de sesión exitoso 🕯️");
    window.location.href = "index.html"; // o la página principal de tu tienda
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});
