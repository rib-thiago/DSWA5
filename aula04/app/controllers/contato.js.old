let contatos = [
  {
    _id: 1,
    nome: "Thiago Ribeiro",
    email: "thiago.bernardes@aluno.ifsp.edu.br",
  },
  { _id: 2, nome: "Thais Caetano", email: "thais.caetano@hotmail.com" },
  { _id: 3, nome: "Gabriela Ferraz", email: "gabiferro@gmail.com" },
];

module.exports = () => {
  const controller = {};

  controller.listaContatos = (req, res) => {
    res.json(contatos);
  };

  controller.obtemContatos = (req, res) => {
    console.log("Selecionou o contato: " + req.params.id);
    let idContato = req.params.id;
    let contato = contatos.filter((contato) => {
      return contato._id == idContato;
    })[0];
    contato
      ? res.json(contato)
      : res.status(404).send("Conato não encontrado!");
  };
  return controller;
};
