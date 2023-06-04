<template>
  <div>
    <sidebar/>
    <form class="form-container" @submit.prevent="cadastrarDocumento">
      <h1>Cadastro de Documento</h1>

      <label for="cliente">Cliente:</label>
      <select id="cliente" name="cliente" v-model="documento.cliente" required>
        <option value="" disabled selected>Selecione um cliente</option>
        <option v-for="cliente in clientes">{{ cliente.nome }}</option>
      </select>

      <label for="nome">Nome do Documento:</label>
      <input type="text" id="nome" name="nome" v-model="documento.nome" required>
      
      <label for="data">Data:</label>
      <input type="date" id="data" name="data" v-model="documento.data" required>

      <label for="hora">Hora:</label>
      <input type="time" id="hora" name="hora" v-model="documento.hora" required>

      <label for="categoria">Categoria:</label>
      <input type="text" id="categoria" name="categoria" v-model="documento.categoria">

      <label for="arquivo">Documento:</label>
      <input type="file" id="arquivo" name="arquivo" @change="handleFileUpload" required>

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
      documento: {
        cliente: '',
        nome: '',
        data: '',
        hora: '',
        categoria: '',
        arquivo: null,
      },
      clientes: [] // Lista de clientes
    };
  },

  mounted() {
    // Realizar a requisição para obter a lista de clientes
    this.obterClientes();
  },

  methods: {
    obterClientes() {
      // Fazer uma requisição para obter a lista de clientes do banco de dados
      fetch('http://localhost:3000/buscarClientes')
        .then(response => response.json())
        .then(data => {
          this.clientes = data.map(cliente => cliente);
        })
        .catch(error => {
          console.error('Erro ao obter a lista de clientes:', error);
        });
    },

    handleFileUpload(event) {
      // Recupera o arquivo selecionado pelo usuário
      const file = event.target.files[0];
      this.documento.arquivo = file;
    },

    cadastrarDocumento() {
      // Crie uma instância de FormData para enviar o formulário com o arquivo
      const formData = new FormData();
      formData.append('cliente', this.documento.cliente);
      formData.append('nome', this.documento.nome);
      formData.append('data', this.documento.data);
      formData.append('hora', this.documento.hora);
      formData.append('categoria', this.documento.categoria);
      formData.append('arquivo', this.documento.arquivo);

      // Envie o formulário para o servidor
      fetch('http://localhost:3000/documentos', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            alert('Documento cadastrado com sucesso');
            this.documento = {}; // Limpar campos do formulário
          } else {
            alert('Erro ao cadastrar documento');
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
input[type="time"],
select, option,
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