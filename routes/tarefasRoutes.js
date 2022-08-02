/*3°*/const express = require('express')
const router = express.Router()
const TarefasController = require('../controllers/tarefas')

/*3°*/router.get('/', TarefasController.showTasks)
/*4°*/router.post('/add', TarefasController.createTasksSave)
      router.post('/remove', TarefasController.RemoveTask)
      router.get('/edit/:id', TarefasController.updateTask)  
      router.post('/edit/', TarefasController.updateTaskPost) 
      router.post('/updatestatus/', TarefasController.toggleTaskStatus) 
/*3°*/router.get('/add', TarefasController.createTasks)

module.exports = router