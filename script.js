const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userPassword = document.querySelector('.pwd');
  const confirmPassword = document.querySelector('.confirmpwd')
  const errorMessage = document.querySelector('.errorMessage')
  
  if (userPassword.value !== confirmPassword.value) {
    console.log(userPassword.value)
    console.log(confirmPassword.value)
    userPassword.style.borderColor = "#f06915";
    userPassword.style.outlineColor = "#f06915";
    confirmPassword.style.borderColor = "#f06915";
    confirmPassword.style.outlineColor = "#f06915";
    errorMessage.textContent = "Passwords do not match";
  } else {
    userPassword.style.borderColor = "#aef586";
    userPassword.style.borderColor = "#aef586";
    userPassword.style.outlineColor = "#aef586";
    confirmPassword.style.borderColor = "#aef586";
    confirmPassword.style.outlineColor = "#aef586";
    errorMessage.textContent = '';
  }
})