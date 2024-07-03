const passInput = document.getElementById("passInput");
const userInput = document.getElementById("userInput");
const loginBtn = document.getElementById("btn-login");
const viewPassword = document.getElementById("vwPass");

const users = [
  {
    username: "nataly",
    password: "nat01",
  },
  {
    username: "kev",
    password: "kev123",
  },
];

viewPassword.addEventListener("click", () => {
  const actualType = passInput.getAttribute("type");
  if (actualType == "password") {
    passInput.setAttribute("type", "text");
  } else {
    passInput.setAttribute("type", "password");
  }
});

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const userValue = userInput.value;
  const passValue = passInput.value;

  const user = users.find(
    (user) => user.username == userValue && user.password == passValue
  );

  if (user) {
    localStorage.setItem("isLogged", true);
    alert("Inicio de sesion exitoso");
    window.location.href = "./index.html";
  } else {
    userInput.value = "";
    passInput.value = "";
    alert("Credenciales incorrectas");
  }
});

if (localStorage.getItem("isLogged")) {
  const form = document.getElementById("loginForm");
  form.innerHTML = `<button id="logout">Cerrar sesion<button>
        <a href="./index.html">
        <i class="bi bi-arrow-left"></i> Back
      </a>`;

  const logoutBtn = document.getElementById("logout");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLogged");
    window.location.href = "./index.html";
  });
}
