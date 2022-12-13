var Tarefas = require('./tarefas-model')

exports.listarTarefa = function (req, res) {
    Tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}

exports.deletarTarefa = function (req, res){
    Tarefas.deleteOne({_id:req.params.id}, function(err, tarefa){
        if (err) console.log("Tarefa não editada"), next(err)
        return console.log("Tarefa deletada com sucesso"), res.send("Tarefa deletada com sucesso")
    })
}

exports.editarTarefa = function (req, res){
    Tarefas.updateOne({_id:req.params.id}, req.body, function(err, tarefa){
        if (err) return console.log("Tarefa não editada")
        return console.log("Tarefa editada com sucesso"), res.send("Tarefa editada com sucesso")
    })
    
}

exports.cadastrarTarefas = function (req, res){
    let tarefa = new Tarefas({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        completa: req.body.completa,
    })
    tarefa.save(function(err){
        if(err){
            return next(err)
        }
    })
    return console.log("Tarefa cadastrada com sucesso"), res.send("tarefa cadastrada com sucesso")
}
