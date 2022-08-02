/*1°*/const {DataTypes} = require('sequelize')
const db = require('../db/conn')
const Tarefas = db.define('Tarefas',{ /*Criando tabela no banco de dados*/
  titulo: {
    type: DataTypes.STRING,
    require: true
  },
  descricao: {
    type: DataTypes.STRING,
    require: true
  },
  feito: {
    type: DataTypes.BOOLEAN,
    require: true
  }
})

module.exports = Tarefas