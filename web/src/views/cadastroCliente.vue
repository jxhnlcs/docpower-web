<template>
    <div>
      <sidebar/>
      <form class="form-container" @submit.prevent="cadastrarCliente">

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" v-model="cliente.nome" required>
        
        <label for="dataNascimento">Data de Nascimento:</label>
        <input type="date" id="dataNascimento" name="dataNascimento" v-model="cliente.dataNascimento" required>
  
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" v-model="cliente.cpf" required>
  
        <label for="filiacao">Filiação:</label>
        <input type="text" id="filiacao" name="filiacao" v-model="cliente.filiacao">
  
        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" v-model="cliente.cep" required>
  
        <label for="estadoCivil">Estado Civil:</label>
        <input type="text" id="estadoCivil" name="estadoCivil" v-model="cliente.estadoCivil" required>
  
        <label for="dependentes">Dependentes:</label>
        <input type="text" id="dependentes" name="dependentes" v-model="cliente.dependentes">
  
        <label for="empresa">Empresa:</label>
        <input type="text" id="empresa" name="empresa" v-model="cliente.empresa" required>

        <label for="cnpj">CNPJ:</label>
        <input type="text" id="cnpj" name="cnpj" v-model="cliente.cnpj" required>
  
        <label for="socio">Sócio:</label>
        <input type="text" id="socio" name="socio" v-model="cliente.socio">
  
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" v-model="cliente.endereco" required>
  
        <label for="cepEndereco">CEP do Endereço:</label>
        <input type="text" id="cepEndereco" name="cepEndereco" v-model="cliente.cepEndereco" required>
  
        <label for="crmPJ">CRM PJ:</label>
        <input type="text" id="crmPJ" name="crmPJ" v-model="cliente.crmPJ">
  
        <label for="crmPF">CRM PF:</label>
        <input type="text" id="crmPF" name="crmPF" v-model="cliente.crmPF">
  
        <label for="vinculosPJ">Vínculos/Funções PJ:</label>
        <input type="text" id="vinculosPJ" name="vinculosPJ" v-model="cliente.vinculosPJ">
  
        <label for="vinculosPF">Vínculos/Funções PF:</label>
        <input type="text" id="vinculosPF" name="vinculosPF" v-model="cliente.vinculosPF">
  
        <label for="senhaGov">Senha Gov.br:</label>
        <input type="password" id="senhaGov" name="senhaGov" v-model="cliente.senhaGov">
  
        <label for="contribuiINSS">Contribui para o INSS?</label>
        <input type="checkbox" id="contribuiINSS" name="contribuiINSS" v-model="cliente.contribuiINSS">
  
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" v-model="cliente.email" required>
  
        <label for="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" v-model="cliente.telefone" required>
  
        <label for="instagram">Instagram:</label>
        <input type="text" id="instagram" name="instagram" v-model="cliente.instagram">
  
        <label for="facebook">Facebook:</label>
        <input type="text" id="facebook" name="facebook" v-model="cliente.facebook">
  
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
        cliente: {
          nome: '',
          dataNascimento: '',
          cpf: '',
          filiacao: '',
          cep: '',
          estadoCivil: '',
          dependentes: '',
          empresa: '',
          cnpj: '',
          socio: '',
          endereco: '',
          cepEndereco: '',
          crmPJ: '',
          crmPF: '',
          vinculosPJ: '',
          vinculosPF: '',
          senhaGov: '',
          contribuiINSS: false,
          email: '',
          telefone: '',
          instagram: '',
          facebook: ''
        }
      };
    },

    methods: {
        cadastrarCliente() {
        fetch('http://localhost:3000/clientes', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.cliente)
        })
            .then(response => {
            if (response.ok) {
                alert('Cliente cadastrado com sucesso');
                this.cliente = {}; // Limpar campos do formulário
            } else {
                alert('Erro ao cadastrar cliente');
                // lidar com o erro de acordo com a necessidade
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