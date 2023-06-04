<template>
    <sidebar />
    <div class="home">
      <div class="box">
        <h2>Lista de Funcionários</h2>
        <ul>
          <li v-for="funcionario in funcionarios" :key="funcionario.id">
            {{ funcionario.nome }}
            <button @click="editarFuncionario(funcionario)">Editar</button>
            <button @click="excluirFuncionario(funcionario.id)">Excluir</button>
          </li>
        </ul>
      </div>
      <div class="box">
        <h2>Lista de Clientes</h2>
        <ul>
          <li v-for="cliente in clientes" :key="cliente.id">
            {{ cliente.nome }}
            <button @click="editarCliente(cliente)">Editar</button>
            <button @click="excluirCliente(cliente.id)">Excluir</button>
          </li>
        </ul>
      </div>
      <div class="box">
        <h2>Lista Documentos</h2>
        <ul>
          <li v-for="documento in documentos" :key="documento.id">
            {{ documento.nome }}
            <button @click="editarDocumento(documento)">Editar</button>
            <button @click="excluirDocumento(documento.id)">Excluir</button>
          </li>
        </ul>
      </div>
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
        funcionarios: [],
        clientes: [],
        documentos: []
      };
    },

    mounted() {
      this.obterFuncionarios();
      this.obterClientes();
      this.obterDocumentos();
    },

    methods: {
        obterClientes() {
        // Fazer a requisição para obter a lista de clientes do backend
        fetch('http://localhost:3000/obterClientes')
          .then(response => response.json())
          .then(data => {
            this.clientes = data;
          })
          .catch(error => {
            console.error('Erro ao obter a lista de clientes:', error);
          });
      },

      obterFuncionarios() {
        // Fazer a requisição para obter a lista de funcionários do backend
        fetch('http://localhost:3000/obterFuncionarios')
          .then(response => response.json())
          .then(data => {
            this.funcionarios = data;
          })
          .catch(error => {
            console.error('Erro ao obter a lista de funcionários:', error);
          });
      },

      obterDocumentos() {
        // Fazer a requisição para obter a lista de documentos do backend
        fetch('http://localhost:3000/obterDocumentos')
          .then(response => response.json())
          .then(data => {
            this.documentos = data;
          })
          .catch(error => {
            console.error('Erro ao obter a lista de documentos:', error);
          });
        },
        editarCliente(cliente) {
      // Implemente a lógica para editar o cliente
      console.log('Editar cliente:', cliente);
        },
        excluirCliente(clienteId) {
        // Implementar a lógica para excluir o cliente
        console.log('Excluir cliente:', clienteId);
        },
        editarFuncionario(funcionario) {
        // Implementar a lógica para editar o funcionário
        console.log('Editar funcionário:', funcionario);
        },
        excluirFuncionario(funcionarioId) {
        // Implemente a lógica para excluir o funcionário
        console.log('Excluir funcionário:', funcionarioId);
        },
        editarDocumento(documento) {
        // Implemente a lógica para editar o documento
        console.log('Editar documento:', documento);
        },
        excluirDocumento(documentoId) {
        // Implemente a lógica para excluir o documento
        console.log('Excluir documento:', documentoId);
        },
    }
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .box {
    flex: 1 1 300px;
    height: 300px; /* Defina a altura desejada */
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .box:hover {
    transform: scale(1.01);
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
  </style>