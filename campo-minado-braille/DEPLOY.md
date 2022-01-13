Instruções para implantação do braille-bum:

git add .
git commit -m "<Comentario>"
git push origin main

Instalar o heroku cli para o SO e versão 64 bits;

Autenticar-se no heroku:

heroku login

Executar pela primeira e única vez:

heroku git:remote -a braille-bum

git subtree push --prefix campo-minado-braille heroku master

