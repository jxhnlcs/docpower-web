<template>
    <div>
      <sidebar/>
      <form class="form-container" @submit.prevent="cadastrarFuncionario">
        <h1>Cadastro de funcionário</h1>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" v-model="funcionario.nome" required>
        
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento" v-model="funcionario.dataNascimento" required>
  
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" v-model="funcionario.cpf" required>
  
        <label for="rg">RG:</label>
        <input type="text" id="rg" name="rg" v-model="funcionario.rg">

        <label for="cargo">Cargo:</label>
        <input type="text" id="cargo" name="cargo" v-model="funcionario.cargo" required>
  
        <label for="username">Nome de usuário:</label>
        <input type="text" id="username" name="username" v-model="funcionario.username" required>
  
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" v-model="funcionario.password">
  
        <button type="submit">Enviar</button>
      </form>
    </div>
</template>
  
  
<script>
  import sidebar from '../components/sidebar.vue';
  
  export default {
    components: {
      sidebar
    },
    data() {
      return {
        funcionario: {
          nome: '',
          dataNascimento: '',
          cpf: '',
          rg: '',
          cargo: '',
          username: '',
          password: '',
        }
      };
    },

    methods: {
        cadastrarFuncionario() {
            // Verificar se já existe um funcionário com o mesmo CPF cadastrado
            fetch(`http://localhost:3000/funcionarios?cpf=${this.funcionario.cpf}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                alert('CPF já cadastrado');
                } else {
                // Realizar o cadastro se o CPF não estiver cadastrado
                fetch('http://localhost:3000/funcionarios', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.funcionario)
                })
                    .then(response => {
                    if (response.ok) {
                        alert('Funcionário cadastrado com sucesso');
                        this.funcionario = {}; // Limpar campos do formulário
                    } else {
                        alert('Erro ao cadastrar funcionário');
                        // Lidar com o erro de acordo com a necessidade
                    }
                    })
                    .catch(error => {
                    alert('Erro na requisição:', error);
                    });
                }
            })
            .catch(error => {
                alert('Erro na requisição:', error);
            });
        }
    }
}

</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="date"],
input[type="email"],
input[type="password"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  background-color: rgb(224, 231, 236);
  box-shadow: 0 0.1rem 0.5rem gray;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

</style>