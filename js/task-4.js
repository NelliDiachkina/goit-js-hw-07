const formLogin = document.querySelector('.login-form');

const handlerSubmit = e => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value.trim();
  const password = e.currentTarget.elements.password.value.trim();

  if (!email || !password) {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  e.currentTarget.reset();
};

formLogin.addEventListener('submit', handlerSubmit);
