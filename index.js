const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error");
const loginPassword = "12345678";
const loginName = "magnai";
const link = "https://www.fuq.com";

form.addEventListener("submit", (e) => {
  let message = [];
  if (name.value === "" && password.value === "") {
    message.push("Талбар хоосон байна");
  } else if (name.value === "") {
    message.push("Нэр хоосон байна");
  } else if (password.value === "") {
    message.push("Нууц үг хоосон байна");
  } else if (password.value.length >= 20) {
    message.push("Нууц үгний уртын хязгаар 20-оос хэтрэхгүй байх ёстой");
  } else if (name.value != loginName && password.value != loginPassword) {
    message.push("Нэр эсвэл нууц үг буруу байна");
  }
  if (name.value === loginName && password.value === loginPassword) {
    window.open(link, "_blank");
  }
  if (message.length > 0) {
    e.preventDefault();
    errorMessage.textContent = message.join(", ");
  }
});
