module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define("book", {
      bookId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      author: {
          type: DataTypes.STRING
      }
  })

  return Book

}