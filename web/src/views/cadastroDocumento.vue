<template>
    <div>
      <sidebar/>
      <form class="form-container" @submit.prevent="cadastrarCliente">
        <h1>Cadastro de Documento</h1>

        <label for="nome">Nome do cliente:</label>
        <input type="text" id="nome" name="nome" v-model="documento.nome" required>
        
        <label for="data">Data:</label>
        <input type="date" id="data" name="data" v-model="documento.data" required>
  
        <label for="hora">Hora:</label>
        <input type="time" id="hora" name="hora" v-model="documento.hora" required>
  
        <label for="categoria">Categoria:</label>
        <input type="text" id="categoria" name="categoria" v-model="documento.categoria">

        <label for="arquivo">Documento:</label>
        <input type="text" id="arquivo" name="arquivo" v-model="documento.arquivo" required>

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
        nome: '',
        data: '',
        hora: '',
        categoria: '',
        arquivo: '',
      }
    };
  },
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