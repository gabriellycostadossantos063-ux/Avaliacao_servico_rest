# Avaliacao_servico_rest


Nome -> Gabrielly Costa Dos Santos

Curso -> Informatica para internet

Unidade -> Web Service

# Descrição do projeto
Criei uma API que permite consultar, cadastrar, atualizar e remover livros, com dados de entrada e saída em formato JSON. Optei por armazenar os livros em uma lista inicial mantida em memória, sem uso de banco de dados, conforme os requisitos do projeto.

# Endpoints existentes
Get/Livros, Listar todos os livros, aceita filtro por query string ex:/Livros?autor=None

Get/Livros/:id, Retorna um livro expecifico pelo id

Post/Livros, Cadastrar um novo livro

Put/Livros:id, Atualiza os dados de um livro existente

Delete/livros:id, Remove um livro pelo id

# Decisões técnicas
Usei Node.JS + Express pela simplicidade na criação de rotas REST.

Optei por armazenar os dados em memória(array), sem banco de dados para simplificar o escopo do projeto.

Separei cada operção (Get,Post,Put,Delete) em sua própria rota, mantendo o código organizado.
