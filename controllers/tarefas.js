/*2°*/const Tarefas = require('../models/tarefas')

/*2°*/class TarefasController {
/*2°*/ static createTasks(req, res){
/*2°*/   res.render('tasks/create') /*TASK/CREATE É O NOME DA VIEW E NÃO DA ROTA*/
  }

   /*4°*/ static async createTasksSave(req, res){ /*Async é usado quando a função irá usaar o banco de dados*/
   const tarefas = {
    titulo: req.body.title,
    descricao: req.body.description,
    feito: false,
   }
   //validaçoes
   //processador dados
   
   await Tarefas.create(tarefas)
   res.redirect('/tarefas')
}

static async RemoveTask(req, res) {
  const id = req.body.id
  await Tarefas.destroy({where: {id: id}})
  res.redirect('/tarefas')
}

static async updateTask(req, res){
  const id = req.params.id
  const tarefas = await Tarefas.findOne({where: {id:id}, raw: true } )
  res.render('tasks/edit', {tarefas})
}

static async updateTaskPost(req,res){
  const id = req.body.id
  const tarefas = {
    titulo: req.body.title,
    descricao: req.body.description,
  }
  await Tarefas.update(tarefas, {where: {id:id}})
  res.redirect('/tarefas')
}

static toggleTaskStatus(req, res) {
  const id = req.body.id

  console.log(req.body)

  const tarefas = {
    feito: req.body.done === '0' ? true : false,
  }

  console.log(tarefas)

  Tarefas.update(tarefas, { where: { id: id } })
    .then(res.redirect('/tarefas'))
    .catch((err) => console.log())
}
  /*2°*/ 
  static async showTasks(req, res) {
    const tarefas = await Tarefas.findAll({raw:true})
    res.render('tasks/all', {tarefas})
  }
       
 /* TASK/CREATE É O NOME DA VIEW E NÃO DA ROTA*/

  

}





/*2°*/module.exports = TarefasController