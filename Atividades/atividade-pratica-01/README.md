# Atividade Prática 01 - Back-End de sistema de doação de sangue

Este é um projeto para a disciplina CSI606 - Sistemas Web I.

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express.js
- MongoDB
- Mongoose

## Arquitetura

O projeto segue a arquitetura MVC (Model-View-Controller), onde:

- Model representa a estrutura de dados e a lógica de negócios.
- View é responsável pela apresentação dos dados ao usuário (neste caso, os dados são enviados como respostas JSON).
- Controller gerencia as requisições do usuário e coordena a interação entre o Model e a View.

## Rotas

As seguintes rotas estão disponíveis, Estarei exemplificando o Model de TIPO SANGUINEO, mas topos os Models possuem rotas básicas de CRUD:

- GET /bloodType/ - Retorna todos os tipos sanguíneos
- GET /bloodType/:id - Retorna um tipo sanguíneo específico pelo ID
- GET /bloodType/type/:type - Retorna um tipo sanguíneo específico pelo tipo
- POST /bloodType/ - Cria um novo tipo sanguíneo
- PUT /bloodType/:id - Atualiza um tipo sanguíneo existente pelo ID
- DELETE /bloodType/:id - Deleta um tipo sanguíneo pelo ID

## Passos para Execução

Para executar o projeto, siga os passos abaixo:

1. Clone o repositório do projeto: `git clone https://github.com/UFOP-CSI477/csi606-2023-02-atividades-danielangelo1/`
2. Acesse o diretório do projeto: `cd Atividades/atividade-pratica-01/`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm start`

O servidor estará disponível em http://localhost:3000.
