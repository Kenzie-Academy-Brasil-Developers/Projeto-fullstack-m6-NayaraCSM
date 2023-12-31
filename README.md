# Projeto final - Fullstack

## Introdução
A ideia do projeto é criar uma aplicação de anúncio de carros, no qual você pode se cadastrar como anúnciante ou comprador. Na rota de usuário temos criação, atualização e deleção de usuário. Além de se cadastrar, você pode publicar anúncios com imagens, tendo presente na rota de anúncios a criação (somente como anúnciante), listagem de todos os anúncios, buscar por id de anúncio, listagem de anúncios de um usúario, edição de anúncio e deleção de anúncio. Temos também a opção de adicionar comentários em anúncios, nessa rota etsá incluido criação de comentários, listagem de comentário de um anúncio, edição de comentário e deleção de comentário. Nesse projeto as rotas de listagem (GET), não necessitam de uma conta de usúario para ser acessada. Veja abaixo as principais informações da API.

---

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Endpoints](#4-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

A URL base da aplicação:


---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](DER_M6_fullstack.drawio.png)

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
npm install
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [User-Address](#1-user, address)
    - [POST - /user](#11-criação-de-usuário-com-endereço)
    - [PATCH - /user/:id](#12-editando-usuários-e-endereço)
	- [DELETE - /user/:id](#13-deleção-de-usuário-e-endereço)
- [Login](#2-login)
    - [POST - /login](#21-login-de-usuário)
- [Anouncement-Image](#3-anouncement, image)
    - [POST - /anouncement](#31-criação-de-anúncio-com-imagem)
    - [GET - /anouncement](#32-listando-todos-anúncios)
    - [GET - /anouncement/:id](#33-listando-por-id-de-anúncio)
    - [GET - /anouncement/user/:id](#34-listando-anúncio-por-usuário)
    - [PATCH - /anouncement/:id](#35-editando-anúncio-e-imagem)
	- [DELETE - /anouncement/:id](#36-deleção-de-anúncio-e-imagem)
- [Comment](#4-comment)
    - [POST - /comment/anouncement/:id](#41-criação-de-comentário)
    - [GET - /comment/anouncement/:id](#42-listando-por-id-de-anúncio)
    - [PATCH - /comment/:id](#43-editando-comentário)
	- [DELETE - /comment/:id](#44-deleção-de-comentário)

---

## 1. **User, Address**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário                  |
| name       | string | O nome do usuário.                              |
| email      | string | O e-mail do usuário.                            |
| password   | string | A senha de acesso do usuário                    |
| cpf        | string | O cpf do usuário.                               |
| phone      | string | O telefone do usuário.                          |
| dateBirth  | string | O data de nascimento do usuário.                |
| description| string | O descrição do usuário.                         |
|isAdvertiser| boolean| Define se um usuário é Anunciante ou não.       |

O objeto Address é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do endereço                 |
| cep        | string | O cep do usuário.                               |
| state      | string | O estado do usuário.                            |
| city       | string | A cidade do usuário                             |
| street     | string | A rua do usuário.                               |
| number     | string | O número de endereço do usuário.                |
| complement | string | O complemento do endereço do usuário.           |


### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /user      | Criação de um usuário.                  |
| PATCH    | /user/:id  | Editar informações do usuário.          |
| DELETE   | /user/:id  | Deletar conta de usúario.               | 

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/user`

### Exemplo de Request:
```
POST /user
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
// Cadastrando com isAdvertiser igual a true
{
	"name": "kenzinho",
	"email": "kenzinho@kenzie.com.br",
	"password": "1234",
	"cpf": "95371854462",
	"phone": "19993576486",
	"dateBirth": "2004-06-26",
	"description": "test",
    "isAdvertiser": true,
	"address": {
		"cep": "12345678",
		"state": "SP",
		"city": "Sorocaba",
		"street": "Rua das andorinhas",
		"number": "9",
		"complement": "test"
	}
}
// Cadastrando com isAdvertiser igual a false ou sem enviar o campo de isAdvertiser
{
	"name": "kenzinho",
	"email": "kenzinho@kenzie.com.br",
	"password": "1234",
	"cpf": "95371854462",
	"phone": "19993576486",
	"dateBirth": "2004-06-26",
	"description": "test",
	"address": {
		"cep": "12345678",
		"state": "SP",
		"city": "Sorocaba",
		"street": "Rua das andorinhas",
		"number": "9",
		"complement": "test"
	}
}
```

### Exemplo de Response:
```
201 Created
```

```json
// Retorno com isAdvertiser igual a true
{
	"id": 1,
	"name": "kenzinho",
	"email": "kenzinho@kenzie.com.br",
	"password": "$2a$10$CVUxJBk1kFtq1EZujfwH/O05S4N8QnBCRkNl4eZ0QSLlNUYeHPSaa",
	"cpf": "95371854462",
	"phone": "19993576486",
	"dateBirth": "2004-06-26",
	"description": "test",
	"isAdvertiser": true,
	"address": {
		"id": 1,
		"cep": "12345678",
		"state": "SP",
		"city": "Sorocaba",
		"street": "Rua das andorinhas",
		"number": "9",
		"complement": "test"
	}
}
// Retorno com isAdvertiser igual a false ou sem enviar o campo de isAdvertiser
{
	"id": 1,
	"name": "kenzinho",
	"email": "kenzinho@kenzie.com.br",
	"password": "$2a$10$CVUxJBk1kFtq1EZujfwH/O05S4N8QnBCRkNl4eZ0QSLlNUYeHPSaa",
	"cpf": "95371854462",
	"phone": "19993576486",
	"dateBirth": "2004-06-26",
	"description": "test",
	"isAdvertiser": false,
	"address": {
		"id": 1,
		"cep": "12345678",
		"state": "SP",
		"city": "Sorocaba",
		"street": "Rua das andorinhas",
		"number": "9",
		"complement": "test"
	}
}
```

### Possíveis Erros:
- Não é possível cadastrar um usuário enviando um email já cadastrado no banco de dados.

### Exemplo de Response:
```
409 Conflict
```

```json
{
	"message": "Email already exists"
}
```

---


### 1.2. **Editando usuário e endereço**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/:id`

### Exemplo de Request:
```
PATCH /user/1
Authorization: Token user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"description": "test edit",
	"address": {
		"number": "2"
	}
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"address": {
		"number": "2"
	},
	"name": "kenzinho",
	"email": "kenzinho@kenzie.com.br",
	"cpf": "95371854462",
	"phone": "19993576486",
	"dateBirth": "2004-06-26",
	"description": "test edit"
}
```

### Possíveis Erros:
- Só é possível o usuário editar seu próprio perfil.
- O id tem que ser de um usuário existente.

### Exemplo de Response:
```
401 Unauthorized
```

```json
{
	"message": "jwt must be provided"
}
```
```
404 Not found
```

```json
{
	"message": "User not found"
}
```

---

### 1.3. **Deletando usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/user/:id`

### Exemplo de Request:
```
DELETE /user/1
Authorization: Token user
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No Content
```
```json
Vazio
```

### Possíveis Erros:
- O id tem que ser de um usuário existente.

### Exemplo de Response:
```
404 Not found
```

```json
{
	"message": "User not found"
}
```

---

## 2. **Login**
[ Voltar para os Endpoints ](#5-endpoints)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST     | /login     | Login de usuário.                       |

---

### 2.1. **Login usuário**

[ Voltar aos Endpoints ](#5-endpoints)


### `/login`

### Exemplo de Request:
```
POST /login
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email": "kenzinho@kenzie.com.br",
	"password": "1234"
}
```

### Exemplo de Response:
```
200 Ok
```
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkdmVydGlzZXIiOmZhbHNlLCJuYW1lIjoia2VuemluaG8iLCJpYXQiOjE2OTY5ODM5ODAsImV4cCI6MTY5NzA3MDM4MCwic3ViIjoiMSJ9.seiuRJ3ELyhdrJfXuynLEzjuZJoQMPyARDfNIwq0rmk"
}
```

### Possíveis Erros:
- Nenhum, o máximo que pode acontecer é retornar um aviso caso um campo venha vazio ou incompleto.

---

## 3. **Anouncement, Image**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Anouncement é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do anúncio.                 |
| brand      | string | O marca do carro.                               |
| model      | string | O modelo do carro.                              |
| year       | string | O ano do carro.                                 |
| fuel       | string | Tipo de combustível.                            |
| mileage    | string | A kilometragem do carro.                        |
| color      | string | A cor do carro.                                 |
| fipePrice  | string | O preço da tabela fibe.                         |
| price      | string | O preço do carro.                               |
| description| string | A descrição do carro.                           |

O objeto Image é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único da imagem                   |
| image      | string | A url da imagem.                                |


### Endpoints

| Método   | Rota                   | Descrição                              |
|----------|------------------------|----------------------------------------|
| POST     | /anouncement           | Criação de um anúncio.                 |
| GET      | /anouncement           | Lista de todos od anúncios.            |
| GET      | /anouncement/:id       | Lista de anúncios por id.              |
| GET      | /anouncement/user/:id  | Lista de anúncios por id de usuário.   |
| PATCH    | /anouncement/:id       | Editar informações do anúncio.         |
| DELETE   | /anouncement/:id       | Deletar anúncio.                       | 

---

### 3.1. **Criação de Anúncio**

[ Voltar para os Endpoints ](#5-endpoints)

### `/anouncement`

### Exemplo de Request:
```
POST /anouncement
Authorization: Token isAdvertiser
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"brand": "BMW",
	"model": "X6",
	"year": "2023",
	"fuel": "Gasolina",
	"mileage": "11000",
	"color": "branco",
	"fipePrice": "300000",
	"price": "350000",
	"description": "test",
	"images": [
			{
				"image": "url da imagem 1"
			},
			{
				"image": "url da imagem 2"
			}
		]
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": 1,
	"brand": "BMW",
	"model": "X6",
	"year": "2023",
	"fuel": "Gasolina",
	"mileage": "11000.00",
	"color": "branco",
	"fipePrice": "300000.00",
	"price": "350000.00",
	"description": "test",
	"image": [
		{
			"id": 1,
			"image": "url da imagem 1"
		},
		{
			"id": 2,
			"image": "url da imagem 2"
		}
	]
}
```

### Possíveis Erros:
- Só é possível o anúnciante criar um anúncio.

### Exemplo de Response:
```
401 Unauthorized
```

```json
{
	"message": "jwt must be provided"
}
```

---

### 3.2. **Listando todos os anúncios**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement`

### Exemplo de Request:
```
GET /anouncement
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": 1,
		"brand": "BMW",
		"model": "X6",
		"year": "2023",
		"fuel": "Gasolina",
		"mileage": "11000.00",
		"color": "branco",
		"fipePrice": "300000.00",
		"price": "350000.00",
		"description": "test",
		"image": [
			{
				"id": 1,
				"image": "url da imagem 1"
			},
			{
				"id": 2,
				"image": "url da imagem 2"
			}
		]
	},
	{
    	"id": 2,
    	"brand": "Renalt",
    	"model": "Sedan",
    	"year": "2023",
    	"fuel": "Gasolina",
    	"mileage": "11000.00",
    	"color": "vermelho",
    	"fipePrice": "300000.00",
    	"price": "350000.00",
    	"description": "test",
    	"image": [
    		{
    			"id": 3,
    			"image": "url da imagem 1"
    		},
    		{
    			"id": 4,
    			"image": "url da imagem 2"
    		}
    	]
    }
]
```

### Possíveis Erros:
- Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

---

### 3.2. **Listando anúncios por id**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/1`

### Exemplo de Request:
```
GET /anouncement/1
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": 1,
		"brand": "BMW",
		"model": "X6",
		"year": "2023",
		"fuel": "Gasolina",
		"mileage": "11000.00",
		"color": "branco",
		"fipePrice": "300000.00",
		"price": "350000.00",
		"description": "test",
		"image": [
			{
				"id": 1,
				"image": "url da imagem 1"
			},
			{
				"id": 2,
				"image": "url da imagem 2"
			}
		]
	}
]
```

### Possíveis Erros:
- Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 3.2. **Listando anúncios por id de usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/user/:id`

### Exemplo de Request:
```
GET /anouncement/user/1
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": 1,
		"brand": "BMW",
		"model": "X6",
		"year": "2023",
		"fuel": "Gasolina",
		"mileage": "11000.00",
		"color": "branco",
		"fipePrice": "300000.00",
		"price": "350000.00",
		"description": "test",
        "user": {
		    "id": 1,
	        "name": "kenzinho",
	        "email": "kenzinho@kenzie.com.br",
		    "isAdvertiser": true
	    },
		"image": [
			{
				"id": 1,
				"image": "url da imagem 1"
			},
			{
				"id": 2,
				"image": "url da imagem 2"
			}
		]
	},
    {
    	"id": 2,
    	"brand": "Renalt",
    	"model": "Sedan",
    	"year": "2023",
    	"fuel": "Gasolina",
    	"mileage": "11000.00",
    	"color": "vermelho",
    	"fipePrice": "300000.00",
    	"price": "350000.00",
    	"description": "test",
    	"user": {
    		"id": 1,
    	    "name": "kenzinho",
    	    "email": "kenzinho@kenzie.com.br",
    		"isAdvertiser": true
    	},
    	"image": [
    		{
    			"id": 3,
    			"image": "url da imagem 1"
    		},
    		{
    			"id": 4,
    			"image": "url da imagem 2"
    		}
    	]
    }
]
```

### Possíveis Erros:
- Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 3.5. **Editando anúncio e imagem**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/1`

### Exemplo de Request:
```
PATCH /anouncement/:id
Authorization: Token user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"description": "test edit",
	"image": [
		{
			"image": "url da imagem 1 test"
		},
		{
			"image": "url da imagem 2 test"
		}
	]
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"image": [
		{
			"image": "url da imagem 1 test"
		},
		{
			"image": "url da imagem 2 test"
		}
	],
	"brand": "BMW",
	"model": "X6",
	"year": "2023",
	"fuel": "Gasolina",
	"mileage": "11000",
	"color": "branco",
	"fipePrice": "300000",
	"price": "350000",
	"description": "test edit"
}
```

### Possíveis Erros:
- Só é possível o usuário editar seu próprio anúncio.
- O id tem que ser de um anúncio existente.

### Exemplo de Response:
```
401 Unauthorized
```

```json
{
	"message": "jwt must be provided"
}
```
```
404 Not found
```

```json
{
	"message": "Anouncement not found"
}
```

---

### 3.6. **Deletando anúncio**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/:id`

### Exemplo de Request:
```
DELETE /anouncement/1
Authorization: Token user
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No Content
```
```json
Vazio
```

### Possíveis Erros:
- O id tem que ser de um anúncio existente.

### Exemplo de Response:
```
404 Not found
```

```json
{
	"message": "Anouncement not found"
}
```

---

## 4. **Comment**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Comment é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único da imagem                   |
| comment    | string | Comentário em um anúncio.                       |
| createdAt  | string | Data de criação do comentário.                       |

### Endpoints

| Método   | Rota                       | Descrição                              |
|----------|----------------------------|----------------------------------------|
| POST     | /comment/anouncement/:id   | Criação de um comentário.              |
| GET      | /comment/anouncement/:id   | Lista de comentários de um anúncio.    |
| PATCH    | /comment/:id               | Editar comentário.                     |
| DELETE   | /comment/:id               | Deletar comentário.                    | 

---

### 4.1. **Criação de Comentário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/comment/anouncement/:id`

### Exemplo de Request:
```
POST /comment/anouncement/1
Authorization: Token user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"comment": "comentário test"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": 1,
	"user": {
		"id": 1,
		"name": "kenzinho"
	},
	"anouncement": {
		"id": 1
	},
	"comment": "comentário test",
	"createdAt": "2023-10-09"
}
```

### Possíveis Erros:
- Só é possível o fazer um comentário se o usuário estiver cadastrado.

### Exemplo de Response:
```
401 Unauthorized
```

```json
{
	"message": "jwt must be provided"
}
```

---

### 4.2. **Listando todos os comentários de um anúncio**

[ Voltar aos Endpoints ](#5-endpoints)

### `/comment/anouncement/:id`

### Exemplo de Request:
```
GET  /comment/anouncement/1 
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
    	"id": 1,
    	"user": {
    		"id": 1,
    		"name": "kenzinho"
    	},
    	"anouncement": {
    		"id": 1
    	},
    	"comment": "comentário test",
    	"createdAt": "2023-10-09"
    },
    {
    	"id": 2,
    	"user": {
    		"id": 1,
    		"name": "kenzinho"
    	},
    	"anouncement": {
    		"id": 1
    	},
    	"comment": "comentário test 2",
    	"createdAt": "2023-10-09"
    }
]
```

### Possíveis Erros:
- Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 4.3. **Editando comentário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/comment/:id`

### Exemplo de Request:
```
PATCH /comment/1
Authorization: Token user
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"comment": "test atualização de comment"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"comment": "test atualização de comment"
}
```

### Possíveis Erros:
- Só é possível o usuário editar seu próprio comentário.
- O id tem que ser de um comentário existente.

### Exemplo de Response:
```
401 Unauthorized
```

```json
{
	"message": "jwt must be provided"
}
```
```
404 Not found
```

```json
{
	"message": "Comment not found"
}
```

---

### 4.6. **Deletando comentário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/comment/:id`

### Exemplo de Request:
```
DELETE /anouncement/1
Authorization: Token user/ Token isAdvertiser
Content-type: application/json
```

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 No Content
```
```json
Vazio
```

### Possíveis Erros:
- O id tem que ser de um comentário existente.

### Exemplo de Response:
```
404 Not found
```

```json
{
	"message": "Comment not found"
}
```
---
