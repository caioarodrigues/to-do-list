# To-do-list

Uma aplicação para gerenciamento de tarefas desenvolvida para concorrer na segunda etapa do processo seletivo Núcleo de Visão Computacional e Engenharia (NUVEN) IFCE
 
## Tecnologias utilizadas
### Frontend
- React
- Typescript
- Vite
- TailwindCSS
- Axios
- ESLint

### Backend
- NodeJS
- TypeScript
- Express
- JsonServer
- Nodemon
- TS-node
- Jest
- Cors
- Axios

## Instalação
Use o gerenciador de pacotes [npm](https://www.npmjs.com/) para instalar as dependências.

```bash
npm install #instala as dependências da API
cd interface/ #vai até o diretório do frontend
npm install #instala as dependências do frontend
```

## Inicialização
1. Você pode montar o arquivo Dockerfile, porém até o momento de documentação, por conta do prazo, não consegui terminá-lo e ele apenas funciona para o frontend da aplicação
```bash
docker build -t minha-imagem .
```

2. Se preferir, pode executar o Frontend, backend e base de dados (Json-Server) de maneira separada: 
```bash
cd interface/ 
npm run dev #inicializa o site
cd .. #volta à página raiz
npm run dev:api #inicia a API
npm run dev:db #inicia o banco de dados do Json Server
```
## Funcionamento das APIs
- No tipo task deve haver as seguintes propriedades:
  1. title (string) 
  2. description (string) 
  3. dueDate (Date)

```javascript
GET
/task/:id
/task/list-all

POST
/task/
# no body deve haver os dados da task

PUT
/task/:id
# no body deve haver os dados da task

DELETE
/task/:id

```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)