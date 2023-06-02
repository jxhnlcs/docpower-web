# Sistema Tecer Gestão

Sistema web de gestão de cliente, funcionários e documentos para a empresa Tecer

##### :game_die: Banco de Dados

- É nescessario preencher os campos do banco de dados para ter acesso à AWS dentro do arquivo server.js na pasta API:

```shell
// Configurações do banco de dados
const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
});
```

- É necessário ter um programa de gerenciamento de banco de dados, por exemplo o dbeaver para criar a conexão com a AWS e gerenciar o banco
- Crie a conexão inserindo os devidos campos iguais a como aparece no seu banco na AWS:
```shell
Server Host:
Username:
Password:
Database:
```

- Após estabelecer a conexão com o banco de dados, rode os seguintes comandos no script do gerenciador de banco de dados para criar as tabelas:
```shell
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO users (username, password)
VALUES ('admin', '123');

CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  dataNascimento DATE NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  filiacao VARCHAR(255),
  endereco VARCHAR(255) NOT NULL,
  cep VARCHAR(9) NOT NULL,
  estadoCivil VARCHAR(50) NOT NULL,
  dependentes VARCHAR(255),
  empresa VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) NOT NULL,
  socio VARCHAR(255),
  enderecoEmpresa VARCHAR(255) NOT NULL,
  cepEnderecoEmpresa VARCHAR(9) NOT NULL,
  crmPJ VARCHAR(255),
  crmPF VARCHAR(255),
  vinculosPJ VARCHAR(255),
  vinculosPF VARCHAR(255),
  senhaGov VARCHAR(255),
  contribuiINSS BOOLEAN,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  instagram VARCHAR(255),
  facebook VARCHAR(255)
);

CREATE TABLE funcionario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  dataNascimento DATE NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  rg VARCHAR(20) NOT NULL,
  cargo VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

```

##### 🔙: Backend

-Após ter feito os passos acima rode os seguintes comandos abaixo no terminal para instalar as dependencias do backend e rodar o servidor:

```shell
cd api
```

```shell
 npm i
```

```shell
node server.js
```

##### 🖥️: Frontend

Para executar o front end basta rodar os comando abaixo:

```shell
cd web
```

```shell
npm run dev
```

#### ⚙️:Tecnologias

- Vuejs
- Node.js
- Express
- MySQL
- AWS
