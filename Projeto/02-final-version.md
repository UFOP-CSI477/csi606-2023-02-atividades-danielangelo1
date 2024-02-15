# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## _Aluna(o): Daniel Ängelo_

---

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

Desenvolver um sistema de avaliação de jogos, inspirado nos modelos de plataformas como Letterboxd e RateYourMusic. A proposta visa criar uma plataforma onde os usuários podem consultar uma API de jogos, avaliar os jogos que jogaram, atribuir estrelas para criar um ranking pessoal e fornecer um resumo das avaliações realizadas. As avaliações serão salvas no backend, permitindo que os usuários editem, excluam ou adicionem novas avaliações.

### 1. Funcionalidades implementadas

<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->

- [x] Listagem de jogos do Banco de Dados
- [x] Avaliação de jogos
- [x] Deletar avaliação
- [x] Listar avaliações por usuário
- [x] Listar avaliações por jogo

### 2. Funcionalidades previstas e não implementadas

<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->

- [ ] Edição de avaliação - Não implementada por falta de tempo e priorização de outras funcionalidades mais importantes.
- [ ] Listagem de jogos da API - Não implementada porque não encontrei uma API de jogos que fosse gratuita e que atendesse as necessidades do projeto.
- [ ] Listagem de avaliações por jogo - Não implementada por falta de tempo e priorização de outras funcionalidades mais importantes.
- [ ] Adição de novos jogos - Não implementada por falta de tempo e priorização de outras funcionalidades mais importantes.

### 3. Outras funcionalidades implementadas

<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->

- [x] Listagem de avaliações por usuário

### 4. Principais desafios e dificuldades

<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->

- **Desafio 1**: Administração do tempo
  - **Descrição**: O tempo foi um dos maiores desafios, pois tive que conciliar o desenvolvimento do projeto com outras atividades da faculdade e do trabalho.
  - **Como foi superado**: O tempo foi administrado de forma a priorizar as funcionalidades mais importantes e que agregassem mais valor ao projeto.

### 5. Instruções para instalação e execução

<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->

1. Clone o repositório

   ```bash
   git clone
   ```

2. Instale as dependências

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto do BackEnd com as seguintes variáveis de ambiente:

   ```env
   DATABASE_URL="mongodb+srv://danielangelo1234:5Zfwf9BH7aSPHLqY@lastplayed.hrc2e2u.mongodb.net/LastPlayed?retryWrites=true&w=majority"
   ```

4. Execute o projeto

   ```bash
    npm run dev
   ```

### 6. Tecnologias utilizadas

<!-- Listar as tecnologias de programação e ferramentas utilizadas no desenvolvimento do projeto. -->

- TypeScript
- Node.js
- Fastify
- MongoDB
- React
- Axios
- React Router
- Material UI

### 7. Referências

<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->
