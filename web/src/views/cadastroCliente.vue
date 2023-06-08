<template>
  <div class="corpoPage">
    <sidebar />
    <form class="form-container" @submit.prevent="modoEdicao ? editarCliente() : cadastrarCliente()">
      <div class="btnModal">
        <button type="button" class="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i
            class="fa-solid fa-plus"></i> Novo Cliente</button>
      </div>
      <div class="modal fade" data-bs-backdrop="static" id="exampleModalToggle" aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ modoEdicao ? "Editar Cliente" : "Cadastro de Cliente" }}</h1>
              <button @click="fecharEdicao" type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="col-md-12">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" v-model="cliente.nome" required>
              </div>
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-8 col-sm-8">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" v-model="cliente.cpf" required>
                  </div>
                  <div class="col-4 col-sm-4">
                    <label for="estadoCivil">Estado Civil:</label>
                    <input type="text" id="estadoCivil" name="estadoCivil" v-model="cliente.estadoCivil" required>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <label for="filiacao">Filiação:</label>
                    <input type="text" id="filiacao" name="filiacao" v-model="cliente.filiacao">
              
              </div>
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-8 col-sm-8">

                    <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" v-model="cliente.endereco" required>
                  </div>
                  <div class="col-4 col-sm-4">
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" v-model="cliente.cep" required>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal">Próximo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" data-bs-backdrop="static" id="exampleModalToggle2" aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">{{ modoEdicao ? "Editar Cliente" : "Cadastro de Cliente" }}</h1>
              <button @click="fecharEdicao" type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <label for="dependentes">Dependentes:</label>
              <input type="text" id="dependentes" name="dependentes" v-model="cliente.dependentes">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-7 col-sm-7">
                    <label for="empresa">Empresa:</label>
              <input type="text" id="empresa" name="empresa" v-model="cliente.empresa" required>
                  </div>
                  <div class="col-5 col-sm-5">
                    <label for="cnpj">CNPJ:</label>
              <input type="text" id="cnpj" name="cnpj" v-model="cliente.cnpj" required>
                  </div>
                </div>
              </div>

              <label for="socio">Sócio:</label>
              <input type="text" id="socio" name="socio" v-model="cliente.socio">

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-7 col-sm-7">
                    <label for="endereco">Endereço da Empresa:</label>
               <input type="text" id="enderecoEmpresa" name="enderecoEmpresa" v-model="cliente.enderecoEmpresa" required>
                  </div>
                  <div class="col-5 col-sm-5">
                    <label for="cepEnderecoEmpresa">CEP da Empresa:</label>
                  <input type="text" id="cepEnderecoEmpresa" name="cepEnderecoEmpresa" v-model="cliente.cepEnderecoEmpresa"
                required>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"><i
                  class="fa-solid fa-arrow-left"></i> Voltar</button>
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal">Próximo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" data-bs-backdrop="static" id="exampleModalToggle3" aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">{{ modoEdicao ? "Editar Cliente" : "Cadastro de Cliente" }}</h1>
              <button @click="fecharEdicao" type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <label for="crmPJ">CRM PJ:</label>
                    <input type="text" id="crmPJ" name="crmPJ" v-model="cliente.crmPJ">
                  </div>
                  <div class="col-6 col-sm-6">
                    <label for="crmPF">CRM PF:</label>
                    <input type="text" id="crmPF" name="crmPF" v-model="cliente.crmPF">
                  </div>
                </div>
              </div>
              <label for="vinculosPJ">Vínculos/Funções PJ:</label>
              <input type="text" id="vinculosPJ" name="vinculosPJ" v-model="cliente.vinculosPJ">

              <label for="vinculosPF">Vínculos/Funções PF:</label>
              <input type="text" id="vinculosPF" name="vinculosPF" v-model="cliente.vinculosPF">

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="contribuiINSS"
                  v-model="cliente.contribuiINSS" name="contribuiINSS" :checked="cliente.contribuiINSS === 1">
                <label for="contribuiINSS" class="form-check-label">
                  Contruibui para o Inss?
                </label>
              </div>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <label for="senhaGov">Senha Gov.br:</label>
                    <input type="password" id="senhaGov" name="senhaGov" v-model="cliente.senhaGov">
                  </div>
                  <div class="col-6 col-sm-6">
                     <label for="senhaGov">Senha:</label>
                    <input type="password" id="senha" name="senha" v-model="cliente.senha">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"><i
                  class="fa-solid fa-arrow-left"></i> Voltar</button>
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle4"
                data-bs-toggle="modal">Próximo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" data-bs-backdrop="static" id="exampleModalToggle4" aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel4">{{ modoEdicao ? "Editar Cliente" : "Cadastro de Cliente" }}</h1>
              <button @click="fecharEdicao" type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="email">E-mail:</label>
              <input type="email" id="email" name="email" v-model="cliente.email" required>

              <label for="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" v-model="cliente.telefone" required>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <label for="instagram">Instagram:</label>
                    <input type="text" id="instagram" name="instagram" v-model="cliente.instagram">
                  </div>
                  <div class="col-6 col-sm-6">
                    <label for="facebook">Facebook:</label>
                    <input type="text" id="facebook" name="facebook" v-model="cliente.facebook">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"><i
                  class="fa-solid fa-arrow-left"></i> Voltar</button>
              <button class="btn" type="submit">{{ modoEdicao ? "Editar" : "Enviar" }}</button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="tabela">
      <Tabela :topoTabela="topo" :tipo="'cliente'" :dados="dadosTabela" @deletar="deletarCliente"
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
      cliente: {
        nome: '',
        dataNascimento: '',
        cpf: '',
        filiacao: '',
        endereco: '',
        cep: '',
        estadoCivil: '',
        dependentes: '',
        empresa: '',
        cnpj: '',
        socio: '',
        enderecoEmpresa: '',
        cepEnderecoEmpresa: '',
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
      },
      topo: ['ID', 'NOME', 'CPF', 'TELEFONE', 'AÇÕES'],
      dadosTabela: [],
      modoEdicao: false
    };
  },

  methods: {
    cadastrarCliente() {
      // Verificar se já existe um CPF ou CNPJ cadastrado
      fetch(`http://localhost:3000/clientes?cpf=${this.cliente.cpf}&cnpj=${this.cliente.cnpj}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            if (data.some(cliente => cliente.cpf === this.cliente.cpf)) {
              Swal.fire({
              icon: 'error',
              title: 'Erro ao cadastrar cliente',
              text: 'O CPF inserido já está cadastrado.',
              confirmButtonText: 'OK'
            });
            }
            if (data.some(cliente => cliente.cnpj === this.cliente.cnpj)) {
              Swal.fire({
              icon: 'error',
              title: 'Erro ao cadastrar cliente',
              text: 'O CNPJ inserido já está cadastrado.',
              confirmButtonText: 'OK'
            });
            }
          } else {
            // Realizar o cadastro se o CPF e CNPJ não estiverem cadastrados
            fetch('http://localhost:3000/clientes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.cliente)
            })
              .then(response => {
                if (response.ok) {
                  Swal.fire({
                  icon: 'success',
                  title: 'Cliente cadastrado com sucesso',
                  text: 'As informações do cliente foram salvas no banco de dados.',
                  confirmButtonText: 'OK'
                });
                  this.cliente = []; // Limpar campos do formulário
                  $('#exampleModalToggle4').modal('hide');
                  this.obterClientes();
                } else {
                  Swal.fire({
                  icon: 'error',
                  title: 'Erro ao cadastrar cliente',
                  text: 'Ocorreu um erro ao cadastrar as informações do cliente.',
                  confirmButtonText: 'OK'
                });
                  // Lidar com o erro de acordo com a necessidade
                }
              })
              .catch(error => {
                Swal.fire({
                icon: 'error',
                title: 'Erro ao cadastrar cliente',
                text: 'Ocorreu um erro ao cadastrar as informações do cliente.',
                confirmButtonText: 'OK'
              });
              });
          }
        })
        .catch(error => {
          Swal.fire({
              icon: 'error',
              title: 'Erro ao cadastrar cliente',
              text: 'Ocorreu um erro ao cadastrar as informações do cliente.',
              confirmButtonText: 'OK'
            });
        });
    },
    async editarCliente() {
        await fetch(`http://localhost:3000/editarCliente/${this.cliente.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.cliente)
        })
          .then(response => {
            if (response.ok) {
              Swal.fire({
              icon: 'success',
              title: 'Cliente atualizado com sucesso',
              text: 'As informações do cliente foram atualizadas com sucesso.',
              confirmButtonText: 'OK'
            });
              this.cliente = []; // Limpar campos do formulário
              $('#exampleModalToggle4').modal('hide');
              this.obterClientes();
            } else {
              // Lidar com o erro de acordo com a necessidade
              Swal.fire({
              icon: 'error',
              title: 'Erro ao atualizar cliente',
              text: 'Ocorreu um erro ao atualizar as informações do cliente.',
              confirmButtonText: 'OK'
            });
            }
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Erro ao atualizar cliente',
              text: 'Ocorreu um erro ao atualizar as informações do cliente.',
              confirmButtonText: 'OK'
            });
          });
    },
    async obterClientes() {
      // Fazer uma requisição para obter a lista de clientes do banco de dados
      await fetch('http://localhost:3000/obterClientes')
        .then(response => response.json())
        .then(data => {
          this.dadosTabela = data.map(cliente => cliente);
        })
        .catch(error => {
          console.error('Erro ao obter a lista de clientes:', error);
        });
    },
    async deletarCliente(id) {
      try {
        const result = await Swal.fire({
          title: "Você tem certeza que deseja deletar este cliente?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim",
          cancelButtonText: "Não",
        });

        if (result.isConfirmed) {
          await fetch(`http://localhost:3000/deletarCliente/${id}`, {
            method: 'DELETE'
          }).then(response => {
            if (response.ok) {
              Swal.fire("", "Cliente deletado com sucesso", "success");
              this.obterClientes();
            } else {
              console.error('Erro ao apagar o cliente:', response.statusText);
            }
          })
        }
      } catch (error) {
        console.error("Erro ao deletar o cliente: ", error);
      }
    },
    async obterClientePorId(id) {
      try {
        const response = await fetch(`http://localhost:3000/obterClienteById/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao obter o Cliente');
        }
        const cliente = await response.json();
        this.cliente = cliente;
      } catch (error) {
        console.error('Erro ao obter o cliente:', error);
      }
    },
    ModalEdicao(id) {
      this.modoEdicao = true,
      this.obterClientePorId(id);
      $('#exampleModalToggle').modal('show');
    },
    fecharEdicao() {
      this.cliente = []
      this.modoEdicao = false
    }
  },
  mounted() {
    this.obterClientes();
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