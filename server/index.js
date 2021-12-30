// create an express server
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MSSQLStore = require("connect-mssql-v2");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const oneDay = 1000 * 60 * 60 * 24;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST, // You can use 'localhost\\instance' to connect to named instance
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // use this if your MS SQL instance uses a self signed certificate
  },
};

const options = {
  table: process.env.DB_SESSION_TABLE,
  ttl: oneDay
};

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MSSQLStore(config, options), // options are optional
    cookie: {
      maxAge: oneDay
    }
  })
);

//serving public file
app.use(express.static(__dirname));
app.use(cookieParser());

app.post("/api/user", (req, res) => {
  const loginNewUser = req.body.loginNewUser;
  const passwordNewUser = req.body.passwordNewUser;
  const emailNewUser = req.body.emailNewUser;

  console.log(loginNewUser);
  const sqlInsert =
    "INSERT INTO usuarios (nome_usuario, senha, email) VALUES (?, ?, ?)";
  db.query(
    sqlInsert,
    [loginNewUser, passwordNewUser, emailNewUser],
    (err, result) => {
      console.log(result);
    }
  );
});

app.post("/login", (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  const sqlLogin =
    "SELECT * FROM usuarios WHERE nome_usuario = ? AND senha = ?";
  db.query(sqlLogin, [login, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      res.send({
        token: "test123",
      });
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

app.get("/", (req, res, next) => {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
