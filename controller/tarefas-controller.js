const tarefas = [
    {id: 1, descricao: 'npm init -y', pronto: true},
    {id: 2, descricao: 'npm install express body-parser', pronto: true},
    {id: 3, descricao: 'npm install -D nodemon', pronto: true},
    {id: 4, descricao: 'Entregar CC', pronto: false}
];

exports.getTarefas = (req, res, next) => {
    res.json(tarefas);
}

exports.postTarefas = (req, res, next) => {
    const descricao = req.body.descricao;
    const pronto = req.body.pronto;

    const id = tarefas.reduce( 
        (valorAnterior, tarefa) =>  Math.max( valorAnterior, tarefa.id+1 ), 0 );
    
    const novaTarefa = {id, descricao, pronto};
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);

};

exports.getTarefa = (req, res, next) =>{
    const idTarefa = req.params.idTarefa;

    const tarefa = tarefas.find(function(element) {
        return element.id == idTarefa;
    });

    (typeof tarefa === "undefined") ? res.status(404).json("Sorry, not found") : res.json(tarefa);
    
}