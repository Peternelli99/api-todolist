const express = require("express")
const mongoose = require("mongoose")

const tarefas_controller = require('./tarefas-controller')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://mateus:1234@cluster0.0qf4e9p.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('teste oi')
})

router.post('/tarefas', tarefas_controller.cadastrarTarefa)
router.get('/tarefas', tarefas_controller.listarTarefas)
router.get('/tarefas/:id', tarefas_controller.buscarTarefa)

let porta = process.env.PORT || 5000

app.listen(porta, ()=>{
    console.log("servidor em execução na porta " + porta)
})