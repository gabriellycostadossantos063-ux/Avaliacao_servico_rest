import express from 'express'

const app = express()

app.use(express.json())

const livros = [
    {
      id: 1,
      titulo: "Dom Casmurro",
      autor:"Machado De Assis",
      disponivel:"true"
    },
    {
      id:2,
      titulo: "O pequeno principe",
      autor: "Antoine de Saint-Exupery",
      disponivel: "true"
    },
    {
      id:3,
      titulo: "Harry Poter e a Pedra filosofal",
      autor: "J. K. Rowling",
      disponivel: "false"
    },
]

//Get / Livros, listar todos os livros

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

//Buscar livro

app.get('/livros:id', (req, res) => {
    const id = id.find(p => p.id == Number (req.params.id));
    if(!livros) return res.status(404).json({erro: 'livro nao encontrado'});
    res.status(200).json(resultado);
});

//Post /livros
//Cadastrar um novo livro

app.post("/livros", (req, res) => {
  const {titulo, autor, disponivel } = req.body;

  if (!titulo || !autor || typeof disponivel !== "boolean") {
    return res.status(400).json({erro: "Informe titulo, autor e disponivel"});
  }
})


//Put /livros/:id
//Atualiza um livro

app.put("/livros/:id", (req ,res) => {
  const id = id.find(p => p.id == Number (req.params.id));
    if(!livros) return res.status(404).json({erro: 'livro nao encontrado'});
    res.status(200).json(resultado);
    const { titulo, autor, disponivel } = req.body;

if (!titulo || !autor || typeof disponivel !== "boolean") {
  return res.status(400).json({ erro: "Informe titulo, autor e disponivel" });
}
livros.titulo = titulo;
livros.autor = autor;
livros.disponivel= disponivel;

res.status(200).json(livros);
});

//Delete /livros/:id
//Exclui um livro

app.delete("/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = livros.findIndex((livro) => livro.id === id);

  if (indice === -1) {
    return res.status(404).json ({ erro: "Livro nao encontrado"})
  }
  livros.splice(indice, 1);
  res.status(204).send();
});


app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})