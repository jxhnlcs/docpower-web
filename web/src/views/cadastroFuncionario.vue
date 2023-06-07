<template>
  <div class="corpoPage">
    <sidebar />
    <form v-if="accessGranted" class="form-container" @submit.prevent="modoEdicao ? editarFuncionario() : cadastrarFuncionario()">
      <div class="btnModal">
        <button type="button" class="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i
            class="fa-solid fa-plus"></i> Novo Funcionário</button>
      </div>

      <div class="modal fade"  data-bs-backdrop="static" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ modoEdicao ? "Editar Funcionario" : "Cadastro de Funcionario" }}</h1>
              <button @click="fecharEdicao" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                 
              <label for="nome">Nome:</label>
              <input type="text" id="nome" name="nome" v-model="funcionario.nome" required>

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-7 col-sm-7">
                    <label for="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" v-model="funcionario.cpf" required>
                  </div>
                  <div class="col-5 col-sm-5">
                    <label for="dataNascimento">Data de Nascimento:</label>
              <input type="date" id="dataNascimento" name="dataNascimento" v-model="funcionario.dataNascimento" required>
                  </div>
                </div>
              </div>
             
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-7 col-sm-7">
                    <label for="rg">RG:</label>
              <input type="text" id="rg" name="rg" v-model="funcionario.rg">
                  </div>
                  <div class="col-5 col-sm-5">
                    <label for="cargo">Cargo:</label>
              <input type="text" id="cargo" name="cargo" v-model="funcionario.cargo" required>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal">próximo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">{{ modoEdicao ? "Editar Funcionario" : "Cadastro de Funcionario" }}</h1>
              <button @click="fecharEdicao" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="col-sm-12">
                <div class="row">
                  <div class="col-6 col-sm-6">
                    <label for="username">Nome de usuário:</label>
              <input type="text" id="username" name="username" v-model="funcionario.username" required>
                  </div>
                  <div class="col-6 col-sm-6">
                    <label for="password">Senha:</label>
              <input type="password" id="password" name="password" v-model="funcionario.password">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i
                  class="fa-solid fa-arrow-left"></i> Voltar</button>
              <button type="submit" class="btn">{{ modoEdicao ? "Editar" : "Enviar" }}</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
    </form>
    <div class="tabela">
      <Tabela :topoTabela="topo" :tipo="'funcionario'" :dados="dadosTabela" @deletar="deletarFuncionario"   @modoEdicao="ModalEdicao"/>
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
      funcionario: {
        nome: '',
        dataNascimento: '',
        cpf: '',
        rg: '',
        cargo: '',
        username: '',
        password: '',
      },
      topo: ['ID', 'NOME', 'CPF', 'CARGO', 'AÇÕES'],
      dadosTabela: [],
    };
  },

  mounted() {
    this.showAccessAlert();
    this.obterFuncionario();
  },

  methods: {
    async obterFuncionario(){
      await fetch('http://localhost:3000/obterFuncionarios')
        .then(response => response.json())
        .then(data => {
          this.dadosTabela = data.map(funcionario => funcionario);
        })
        .catch(error => {
          console.error('Erro ao obter a lista de Funcionarios:', error);
        });
    },
    showAccessAlert() {
      const password = prompt('Apenas o gerente/admin tem acesso a esta tela. Por favor, insira a senha de acesso:');
      if (password === 'admin0102') {
        this.accessGranted = true;
      } else {
        alert('Senha inválida. Acesso negado.');
        window.location.href= '/cadastroCliente'
      }
    },
    cadastrarFuncionario() {
      // Verificar se já existe um funcionário com o mesmo CPF ou RG cadastrado
      fetch(`http://localhost:3000/funcionarios?cpf=${this.funcionario.cpf}&rg=${this.funcionario.rg}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            alert('CPF ou RG já cadastrados');
          } else {
            // Realizar o cadastro se o CPF e RG não estiverem cadastrados
            fetch('http://localhost:3000/funcionarios', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.funcionario)
            })
              .then(response => {
                if (response.ok) {
                  Swal.fire({
                  icon: 'success',
                  title: 'Funcionário cadastrado com sucesso',
                  text: 'As informações do funcionário foram cadastradas com sucesso.',
                  confirmButtonText: 'OK'
                });
                  this.funcionario = {}; // Limpar campos do formulário
                  $('#exampleModalToggle2').modal('hide');
                } else {
                  Swal.fire({
                  icon: 'error',
                  title: 'Erro ao cadastrar funcionário',
                  text: 'Ocorreu um erro ao cadastrar o funcionário.',
                  confirmButtonText: 'OK'
                });
                  // Lidar com o erro de acordo com a necessidade
                }
              })
              .catch(error => {
                Swal.fire({
                icon: 'error',
                title: 'Erro ao cadastrar funcionário',
                text: 'Ocorreu um erro ao cadastrar o funcionário.',
                confirmButtonText: 'OK'
              });
              });
          }
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Erro ao cadastrar documento',
            text: 'Ocorreu um erro ao atualizar o documento.',
            confirmButtonText: 'OK'
          });
        });
    },
    async deletarFuncionario(id) {
      try {
        const result = await Swal.fire({
          title: "Você tem certeza que deseja deletar este Funcionário?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim",
          cancelButtonText: "Não",
        });

        if (result.isConfirmed) {
          await fetch(`http://localhost:3000/deletarFuncionario/${id}`, {
            method: 'DELETE'
          }).then(response => {
            if (response.ok) {
              Swal.fire("", "Funcionario deletado com sucesso", "success");
              this.obterFuncionario();

            } else {
              console.error('Erro ao apagar o Funcionario:', response.statusText);
            }
          })
        }
      } catch (error) {
        console.error("Erro ao deletar o Funcionario: ", error);
      }
    },
    async obterFuncionarioPorId(id) {
      try {
        const response = await fetch(`http://localhost:3000/obterFuncionarioById/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao obter o Funcionario');
        }
        const funcionario = await response.json();
        this.funcionario = funcionario;
        this.funcionario.dataNascimento =  new Date(funcionario.dataNascimento).toISOString().slice(0, 10);
        console.log(this.funcionario)
      } catch (error) {
        console.error('Erro ao obter o funcionario:', error);
      }
    },
    async editarFuncionario() {
        await fetch(`http://localhost:3000/editarFuncionario/${this.funcionario.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.funcionario)
        })
          .then(response => {
            if (response.ok) {
              Swal.fire({
                icon: 'success',
                title: 'Funcionário atualizado com sucesso',
                text: 'As informações do funcionário foram atualizadas com sucesso.',
                confirmButtonText: 'OK'
              });
              this.funcionario = []; // Limpar campos do formulário
              $('#exampleModalToggle2').modal('hide');
              this.obterFuncionario();
            } else {
              alert('Erro ao atualizar funcionario');
              // Lidar com o erro de acordo com a necessidade
            }
          })
          .catch(error => {
            alert('Erro na requisição:', error);
          });
    },
    ModalEdicao(id) {
      this.modoEdicao = true,
      this.obterFuncionarioPorId(id);
      $('#exampleModalToggle').modal('show');
    },
    fecharEdicao() {
      this.funcionario = []
      this.modoEdicao = false
    }
  }
}

</script>

<style scoped>

.btnModal > button{
  background-color: rgb(13, 27, 64);
  color: white;
}

.corpoPage{
  background-color: #f8f8f8;
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

.tabela{
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
}</style>