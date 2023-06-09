# Sistema Tecer Gestão

Sistema web de gestão de clientes, funcionários e documentos para a empresa Tecer

# Como rodar o sistema

##### :game_die: Banco de Dados

- É nescessario preencher os campos do banco de dados para ter acesso à AWS dentro do arquivo server.js na pasta API:

```shell
// Configurações do banco de dados
const db = mysql.createConnection({
  host: 'database.c6wxwix91xtq.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'database',
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
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO users (username, password)
VALUES ('admin', '123');

CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `dataNascimento` date NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `filiacao` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `estadoCivil` varchar(50) NOT NULL,
  `dependentes` varchar(255) DEFAULT NULL,
  `empresa` varchar(255) NOT NULL,
  `cnpj` varchar(18) NOT NULL,
  `socio` varchar(255) DEFAULT NULL,
  `enderecoEmpresa` varchar(255) NOT NULL,
  `cepEnderecoEmpresa` varchar(9) NOT NULL,
  `crmPJ` varchar(255) DEFAULT NULL,
  `crmPF` varchar(255) DEFAULT NULL,
  `vinculosPJ` varchar(255) DEFAULT NULL,
  `vinculosPF` varchar(255) DEFAULT NULL,
  `senhaGov` varchar(255) DEFAULT NULL,
  `contribuiINSS` tinyint(1) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `documentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  `categoria_id` int NOT NULL,
  `arquivo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `documentos_ibfk_1` (`cliente_id`),
  KEY `documentos_ibfk_2_idx` (`categoria_id`),
  CONSTRAINT `documentos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `documentos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `funcionario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `dataNascimento` date NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `rg` varchar(20) NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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

Login e senha universal do gerente:
```shell
Usuário: admin
Senha: 123
```

Senha de acesso de tela de cadastro de funcionário:
```shell
admin0102
```

#### ⚙️:Tecnologias

- Vuejs
- Node.js
- Express
- MySQL
- AWS
