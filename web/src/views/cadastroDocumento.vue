<template>
  <div class="corpoPage">
    <sidebar />
    <form class="form-container" @submit.prevent="modoEdicao ? editarDocumento() : cadastrarDocumento()">
      <div class="btnModal">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa-solid fa-plus"></i> Novo Documento
        </button>
      </div>
      <!-- Modal -->
      <div ref="modal" class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{{ modoEdicao ? "Editar Documentos" : "Cadastro de Documentos" }}</h1>
              <button type="button" @click="fecharEdicao" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="cliente">Cliente:</label>
              <select id="selectCliente" name="cliente" v-model="documento.cliente_id" required>
                <option  disabled selected value="">Selecione um cliente</option>
                <option v-for="cliente in clientes" :value="cliente.id" >{{ cliente.nome }}</option>
              </select>

              <label for="nome">Nome do Documento:</label>
              <input type="text" id="nome" name="nome" v-model="documento.nome" required>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <label for="data">Data:</label>
                    <input type="date" id="data" name="data" v-model="documento.data" required>
                  </div>
                  <div class="col-6 col-sm-6">
                    <label for="hora">Hora:</label>
                    <input type="time" id="hora" name="hora" v-model="documento.hora" required>
                  </div>
                </div>
              </div>

              <label for="cliente">Categoria:</label>
              <select id="selectCategoria" name="categoria" v-model="documento.categoria_id" required>
                <option  disabled selected value="">Selecione uma categoria</option>
                <option v-for="categoria in categorias" :value="categoria.id" >{{ categoria.nome }}</option>
              </select>

              <label for="arquivo">Documento:</label>
              <input type="file" id="arquivo" name="arquivo" @change="handleFileUpload" required>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="fecharEdicao">Close</button>
              <button type="submit" class="btn btn-primary">{{ modoEdicao ? "Editar" : "Enviar" }}</button>
            </div>
          </div>
        </div>
      </div>


    </form>
    <div class="tabela">
      <Tabela :topoTabela="topo" :tipo="'documento'" :dados="dadosTabela" @deletar="deletarDoc"
        @modoEdicao="ModalEdicao" />
    </div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar.vue';
import Tabela from '../components/tabela.vue';
import Swal from 'sweetalert2';

export default {
  components: {
    sidebar,
    Tabela
  },
  data() {
    return {
      documento: {
        cliente_id: '',
        nome: '',
        data: '',
        hora: '',
        categoria_id: '',
        arquivo: null,
      },
      clientes: [],// Lista de clientes
      topo: ['ID', 'CLIENTE', 'DOCUMENTO', 'CATEGORIA', 'AÇÕES'],
      dadosTabela: [],
      modoEdicao: false,
      categorias: []
    };
  },

  mounted() {
    // Realizar a requisição para obter a lista de clientes
    this.obterClientes();
    this.obterDocumentos();
    this.obterCategorias();
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
    async obterDocumentos() {
      // Fazer uma requisição para obter a lista de clientes do banco de dados
      await fetch('http://localhost:3000/obterDocumentos')
        .then(response => response.json())
        .then(data => {
          this.dadosTabela = data.map(documento => documento);
        })
        .catch(error => {
          console.error('Erro ao obter a lista de Documentos:', error);
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
      formData.append('cliente', this.documento.cliente_id);
      formData.append('nome', this.documento.nome);
      formData.append('data', this.documento.data);
      formData.append('hora', this.documento.hora);
      formData.append('categoria', this.documento.categoria_id);
      formData.append('arquivo', this.documento.arquivo);

      // Envie o formulário para o servidor
      fetch('http://localhost:3000/documentos', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            alert('Documento cadastrado com sucesso');
            this.documento = []; // Limpar campos do formulário
            $('#exampleModal').modal('hide');
            this.obterDocumentos();
          } else {
            alert('Erro ao cadastrar documento');
          }
        })
        .catch(error => {
          alert('Erro na requisição:', error);
        });
    },
    async deletarDoc(id) {
      try {
        const result = await Swal.fire({
          title: "Você tem certeza que deseja deletar este documento?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim",
          cancelButtonText: "Não",
        });

        if (result.isConfirmed) {
          await fetch(`http://localhost:3000/deletarDoc/${id}`, {
            method: 'DELETE'
          }).then(response => {
            if (response.ok) {
              Swal.fire("", "Documento deletado com sucesso", "success");
              this.obterDocumentos();
            } else {
              console.error('Erro ao apagar o documento:', response.statusText);
            }
          })
        }
      } catch (error) {
        console.error("Erro ao deletar o documento: ", error);
      }
    },
    async obterDocumentoPorId(id) {
      try {
        const response = await fetch(`http://localhost:3000/obterDocumentosById/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao obter o documento');
        }
        const documento = await response.json();
        this.documento = documento;
        console.log(this.documento)
        this.documento.data = new Date(documento.data).toISOString().slice(0, 10)
      } catch (error) {
        console.error('Erro ao obter o documento:', error);
      }
    },
    async editarDocumento() {
      await fetch(`http://localhost:3000/editarDoc/${this.documento.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.documento)
      })
        .then(response => {
          if (response.ok) {
            alert('Documento atualizado com sucesso');
            this.documento = []; // Limpar campos do formulário
            $('#exampleModal').modal('hide');
            this.obterDocumentos();
          } else {
            alert('Erro ao atualizar documento');
            // Lidar com o erro de acordo com a necessidade
          }
        })
        .catch(error => {
          alert('Erro na requisição:', error);
        });
    },
    async obterCategorias(){
      fetch('http://localhost:3000/obterCategorias')
        .then(response => response.json())
        .then(data => {
          this.categorias = data.map(categoria => categoria);
        })
        .catch(error => {
          console.error('Erro ao obter a lista de clientes:', error);
        });
    },
    ModalEdicao(id) {
      this.modoEdicao = true
      $('#exampleModal').modal('show');
      this.obterDocumentoPorId(id);
    },
    fecharEdicao() {
      this.documento = []
      this.modoEdicao = false
    }
  }
}
</script>

<style scoped>
.corpoPage {
  background-color: #f8f8f8;
}

.btnModal>button {
  background-color: rgb(13, 27, 64);
  color: white;
}


.form-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.tabela {
  width: 95%;
  margin: auto;
  border-radius: 20px;
  background-color: white;
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
select,
option,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>