async function handleLogin() {
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputSenha').value;

  try {
    const response = await axios.post('http://localhost:3500/users/login', {
      email: email,
      password: password,
    });

    console.log('Login bem-sucedido:', response.data);

  } catch (error) {
    console.error('Erro no login:', error.message);
  }
}