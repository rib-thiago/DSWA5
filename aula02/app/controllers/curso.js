let cursos = [
    {
        _id: 1,
        curso: "Análise e Desemvovlimento de Sistemas",
        coordenador: "fabio.teixeira@ifsp.edu.br",
    },
    {
        _id: 2,
        nome: "Engenharia de Produção",
        email: "fabiano.teixeira@ifsp.edu.br",
    },
    {
        _id: 3,
        nome: "Licenciatura em Letras Português/Inglês",
        email: "melissa.teixeira@ifsp.edu.br",
    },
];

module.exports = () => {
    const controller = {};

    controller.listaCursos = (req, res) => {
        res.json(cursos);
    };

    controller.obtemCursos = (req, res) => {
        console.log("Selecionou o curso: " + req.params.id);
        let idCurso = req.params.id;
        let curso = cursos.filter((curso) => {
            return curso._id == idCurso;
        })[0];
        curso ? res.json(curso) : res.status(404).send("Curso não encontrado!");
    };
    return controller;
};
