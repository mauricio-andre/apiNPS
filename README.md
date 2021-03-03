<h1 align="center">
  apiNPS
</h1>

<h2 align="center">
  API para o controle de Net Promoter Score
</h2>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#get-started">Get Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testando-a-api">Testando a API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

---

## Sobre o projeto

Este projeto foi desenvolvido durante o quarto evento Next Level Week (NLW) promovido pela rocketseat. O evento NLW é conduzido durante o período de uma semana por um dos educators da rocketseat que guia o aprendizado durante esse período, a quarta edição deste evento trouxe uma trilha incrível de nodeJS.

A API desenvolvida nesta semana tem o objetivo de calcular o Net Promoter Score (NPS) ou resultado de pesquisas de satisfação, por meio desta é possível cadastrar pesquisas de satisfação, usuários que vão recebe-las, enviar um e-mail aos usuários cadastrados para coletar o resultado, e resgatar o resultados das pesquisas cadastrar.

Além do desenvolvimento dos recursos para a realização das funções já mencionadas, esse projeto inclui testes automatizados para as funções de usuário e pesquisa.

## Get Started

Para iniciar esta API é necessária possuir os seguintes recursos em seu ambiente: <br />
Node ^14.15.5

- Faça o clone deste repositório para seu ambiente
- Acesse o diretório do projeto por meio do terminal para executar os passos seguintes
- Execute o comando `yarn install` para baixar as dependências deste projeto, você pode usar `npm` como alternativa ao `yarn`
- Execute o comando `yarn typeorm migration:run` para criar as tabelas na base de dados
- Para habilitar o envio de e-mail renomeio o arquivo .env.example para .env
- Alterar os parâmetros do arquivo .env conforme suas credenciais

## Testando a API

As rotas desta API podem ser testadas por meio de qualquer sistema para testes de API REST. Dentro da pasta [client](./client) ha arquivos *.http* que possuem a descrição das rotas e as propriedades a serem enviadas em cada uma delas, se você estiver usando o VS Code pode instalar a extensão *REST Client* para enviar as requisições diretamente pela IDE.

## Licença
Esse projeto está sob licença MIT, veja o arquivo de [LICENSE](./LICENSE) para mais detalhes
