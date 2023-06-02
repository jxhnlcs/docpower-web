const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Configurações do banco de dados
const db = mysql.createConnection({
  host: 'database.c6wxwix91xtq.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'database',
});

// Conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso');
});

// Rota para o login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Consulta ao banco de dados
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro no servidor' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Credenciais inválidas' });
      } else {
        res.json({ message: 'Login bem-sucedido' });
      }
    }
  );
});

// Rota para cadastrar cliente
app.post('/clientes', (req, res) => {
  const cliente = req.body;

  // Consulta ao banco de dados para inserir o cliente
  db.query('INSERT INTO cliente SET ?', cliente, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro no servidor' });
    } else {
      res.status(201).json({ message: 'Cliente cadastrado com sucesso' });
    }
  });
});


app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
