/*1°*/const express = require('express')
/*1°*/const exphbs = require('express-handlebars')

/*1°*/const app = express()
/*1°*/const conn = require('./db/conn')

/*2°*/ const tarefas = require('./models/tarefas')

/*3° Importando rotas*/ 
const TarefasRotas = require('./routes/tarefasRoutes')

/*1°*/app.engine('handlebars', exphbs.engine())
/*1°*/app.set('view engine', 'handlebars')

/*1°*/app.use(
  express.urlencoded({
    extended: true
  })
)

/*1°*/app.use(express.json())
/*1°*/app.use(express.static('public'))
/*1°*//*app.listen(3000)*/

/*3° Usando rotas*/
      app.use('/tarefas', TarefasRotas) /*Essa é a rota que tem que escrevar no navegador tarefas/....*/ 

/*2°*/   conn
        .sync()
        .then(()=> {app.listen(3000)})
        .catch((error) => console.log(error))
         