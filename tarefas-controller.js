var Tarefas = require('./tarefas-model')

exports.listarTarefa = function (req, res) {
    Tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(estudantes);
    })
}

exports.buscarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}


exports.cadastrarTarefas = function (req, res){
    let Tarefas = new Tarefas({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        completa: req.body.completa,
    })
    Tarefas.save(function(errr){
        if(err){
            return next(err)
        }
    })
    res.send("tarefa cadastrada com sucesso")
}
