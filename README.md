### Documentação Inicial

Essa aplicação é constituída de um cliente (frontend) e um servidor (API), que realiza a comunicação com o banco de dados em MySQL.

Para o desenvolvimento inicial, é necessário que os seguintes componentes sejam instalados:

1. [Nodejs v16.11.1](https://nodejs.org/en/);
2. [npm v8.1.1](https://www.npmjs.com/);
3. [Banco de Dados MySQL (5.7.22)](https://www.mysql.com/downloads/);
4. [Cliente de Banco de Dados - Dbeaver](https://dbeaver.io/download/).

Outros requisitos:

1. [Git client (Instalado na Máquina de Desenvolvimento)](https://gitforwindows.org/)
2. Git configurado para acesso ao github (com as devidas chaves SSH configuradas na máquina local e registradas no https://github.com), onde os fontes estão disponíveis.
Ver documentação. [https://docs.github.com/pt/get-started/quickstart/set-up-git](https://docs.github.com/pt/get-started/quickstart/set-up-git)


Tendo os requisitos de instalação sido atendidos, prossiga com os passos:

Para configuração, realize o clone do repositório git no diretório
de desenvolvimento da sua máquina local, conforme o comando abaixo:


```console
git clone git@github.com:marcosnasp/braille-bum.git
```

Em seguida, realize a configuração das variáveis de acesso ao banco de dados:

1. Crie um arquivo com o nome .env, na pasta server;
2. Registre as variáveis de acesso ao banco de dados (*).

(*) Utilize os seguintes nomes de variáveis:

```console
DB_HOST=<nome_do_servidor>
DB_USER=<usuario_bd>
DB_PASS=<senha_banco_dados>
DB_PORT=<porta_banco_dados>
DB_NAME=<nome_banco_dados>
```

Ao se autenticar no banco de dados, utilizando o cliente dbeaver, execute o seguinte
script inicial:

```sql
create schema braille_boom collate latin1_swedish_ci;

create table usuarios
(
	id_usuario int auto_increment
		primary key,
	nome_usuario varchar(60) not null,
	senha varchar(255) not null,
	email varchar(120) not null,
	constraint pk_nome_usuario
		unique (nome_usuario)
)
comment 'Tabela com os Usuários do Jogo (Braille_Boom)';
```


Em seguida, navegue até a pasta server, e execute o seguinte comando num terminal a parte:

```console
npm install && npm run devStart
```

Posteriormente, navegue até o diretório campo-minado-braille (client), e execute o seguinte comando:

```console
npm install && npm start
```
As aplicações vão executar, inicialmente nas seguintes portas (3001), para o servidor,
e 3000 para o client (aplicação web). Portanto, acesse o navegador na página: [http://localhost:3000](http://localhost:3000).