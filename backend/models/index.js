const dbConfig = require('../utils/database.js');

const {Sequelize, DataTypes} = require('sequelize');
//const sequelize = require('../utils/database.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        logging: false,
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require('./books.js')(sequelize, DataTypes)
db.reviews = require('./reviews.js')(sequelize, DataTypes)

db.sequelize.sync({ alter: true })
.then(() => {
    console.log('yes re-sync done!')
})


// // 1 to Many Relation
db.books.hasMany(db.reviews, {
    foreignKey: {
        name: 'bookId',
        allowNull: false 
        },
    as: 'review',
   onDelete: 'cascade'
})

db.reviews.belongsTo(db.books, {
    foreignKey: 'bookId',
    as: 'book'
})



module.exports = db

