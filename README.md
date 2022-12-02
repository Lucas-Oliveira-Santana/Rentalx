<h1> Rentx, API to rent a car </h1>
This challenge was developed in Ignite RocketSeat.


## Requirements:

Before start, you'l need install: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) , [NodeJs](https://nodejs.org/en/download/), [Docker](https://docs.docker.com/engine/install/) , [Docker-compose](https://docs.docker.com/compose/install/)



## Runing Local
To run the project, follow the next steps:

## Clone Repository

```bash
 https://github.com/Lucas-Oliveira-Santana/Rentalx.git
 
 cd Rentalx
```

## Install dependecies 
```bash
 npm install

 ```



## Docker up
  ```bash
  sudo docker-compose up -d
  ```

## Run Migrations

 ```bash
 npm run typeorm migration:run
 ```
 
## API Documentation ( Local )
Once the application is set up, you will be able to access OpenSwagger documentation, all you have to do is browse to http://localhost:3333/api-docs



## Technologies used
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/)
- [TypeORM](https://typeorm.io/)
- [PostgresSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [tsyringe](https://www.npmjs.com/package/tsyringe)
- [dayjs](https://www.npmjs.com/package/dayjs)
- [multer](https://www.npmjs.com/package/multer)
- [nodemailer](https://nodemailer.com/about)














# RENTX 🚗
API de locação de carros
***
# Requistos da aplicação:

## Cadastro de carro

***RF:***
* Deve ser possível cadastrar um novo carro.

***RN:***
* Não deve ser possível cadastrar um carro com uma placa já existente.
* O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

## Listagem de carros

***RF:***
* Deve ser possível listar todos os carros disponíveis pelo - nome da categoria.
* Deve ser possível listar todos os carros disponíveis pelo - nome da marca.
* Deve ser possível listar todos os carros disponíveis pelo - nome do carro.

***RN:***
* Deve ser possível listar todos os carros disponíveis.
* O usuário não precisar estar logado no sistema.

## Cadastro de Especificação no carro

***RF:***
* Deve ser possível cadastrar uma especificação para um carro.

***RN:***
* Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
* Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário - administrador.

## Cadastro de imagens do carro

***RF:***
* Deve ser possível cadastrar a imagem do carro.

***RNF:***
* Utilizar o multer para upload dos arquivos.

***RN:***
* O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário - administrador.

## Aluguel de carro

***RF:***
* Deve ser possível cadastrar um aluguel.

***RN:***
* O aluguel deve ter duração mínima de 24 horas.
* Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário.
* Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro.
* O usuário deve estar logado na aplicação
* Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível.

## Devolução de carro

***RF:***
* Deve ser possível realizar a devolução de um carro.

***RN:***
* Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
* Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
* Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
* Ao realizar a devolução, deverá ser calculado o total do - aluguel.
* Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
* Caso haja multa, deverá ser somado ao total do aluguel.
* O usuário deve estar logado na aplicação.

## Listagem de Alugueis para usuário

***RF:***
* Deve ser possível realizar a busca de todos os alugueis para o usuário.

***RN:***
* O usuário deve estar logado na aplicação.

# Recuperar Senha

***RF:***
* Deve ser possível o usuário recuperar a senha informando o e-mail.
* O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
* O usuário deve conseguir inserir uma nova senha.

*****RN:*****
* O usuário precisa informar uma nova senha.
* O link enviado para a recuperação deve expirar em 3 horas.

***

Observações:
***RF*** -> Requisitos funcionais.
***RNF*** -> Requisitos não funcionais.
***RN*** -> Regra de negócio.
