# Vigia 
Um bot do discord pra monitorar status da sua conta, para você dormir tranquilo.
Especificamente usando a API publica da alura

## Setup inicial

Tenha Node.js v16+ instalado, assim como o npm mais recente possivel.

Rode então
```bash
cd AccountBot
npm install
```
Depois disso crie um arquivo `.env` para suas variaveis que devem ficar escondidas. Criei um arquivo `sample.env` como exemplo de como preencher o seu `.env`.

## IMPORTANTE

PARA O BOT FUNCIONAR É NECESSÁRIO TER A PERMISSÃO `applications.commands` definida no Dev Portal do Discord (oAuth2 -> URL GEN -> marque BOT -> applications.commands ).


### Registrando Comandos

Para que seus comandos apareçam ao digitar a `/<command>` no seu discord é preciso fazer o seguinte: 
```bash
node src/deploy-commands.js
```
e para bot rodar (dentro da pasta do projeto)
```bash
node .
``` 

### Obrigado! 💜 

É muito bom saber que alguém gostou do projeto. É um projeto para a empresa que trabalho atualmente, algo que desenvolvi sozinho do zero, sem ajuda de ninguem de forma totalmente autodidata. Caso queira contribuir fique a vontade para fazer um fork do projeto 💜 
