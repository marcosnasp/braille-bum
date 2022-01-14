Instruções para implantação do braille-bum no ambiente do heroku:

```console
git add .
git commit -m "<Comentario>"
git push origin main
```

Instalar o heroku cli para o SO e versão 64 bits;

Autenticar-se no heroku:

```console
heroku login
```

Executar pela primeira e única vez:


```console
heroku git:remote -a braille-bum
```

```console
git subtree push --prefix campo-minado-braille heroku master
```
