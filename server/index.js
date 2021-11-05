// create an express server
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
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
app.use(
  sessions({
    secret: "zYi2UK2om%gDPQ#VYh8Zig*b5mRnHE",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
