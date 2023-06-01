<template>

  <div class="container">
    <div class="form-container">
      <p>Login</p>
      <form @submit="login" class="form">
          <label>Usuário</label>
          <input type="text" class="input" placeholder="Usuário" v-model="username">
          <label>Senha</label>
          <input type="password" class="input" placeholder="Senha" v-model="password"> 
          <button type="submit">Entrar</button>
      </form>
    </div>
  </div>

</template>

<script>

export default{
  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123') {
        // Redirecionar para a tela Home
        this.$router.push('/home');
      } else {
        // Exibir uma mensagem de erro de login inválido
        alert('Credenciais inválidas');
      }
    }
  }

}

</script>

<style scoped>

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../assets/img/polygon-scatter-haikei.svg);
  overflow: hidden;
}


.form-container {
  width: 300px;
  background: linear-gradient(180deg,rgb(13, 27, 64) 25%,rgb(255, 255, 255) 20%);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0.2rem 1rem gray;
  border-radius: 15px;
}

.form {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
}

.form-container p {
  position: absolute;
  top: 1%;
  font-size: 30px;
  font-weight: 900;
  color: rgb(255, 255, 255);
}

.form-container label {
  color: rgb(40, 42, 44);
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
}

.form-container .input {
  padding: 10px;
  height: 35px;
  border: none;
  background-color: rgb(224, 231, 236);
  border-radius: 15px;
}

.form-container .input:focus {
  outline: none;
}

.form-container button {
  border: none;
  height: 45px;
  margin-top: 30px;
  background-color: rgb(13, 27, 64);
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  font-weight: bold;
}

.form-container button:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(13, 27, 64);
  transition: 0.5s;
  box-shadow: 0 0.2rem 1rem gray;
}
</style>