/*1°*/const { Sequelize } = require ('sequelize')
/*1°*/const sequelize = new Sequelize('mvc', 'root', 'JEKIO4kk@s',{
  /*1°*/host: 'localhost',
  /*1°*/dialect: 'mysql',
})


/*1°*/try {
  sequelize.authenticate()
  console.log('Conectamos ao sequelize')
}catch(error){
  console.log('Nao foi possivel conectar')
}

/*1°*/module.exports = sequelize