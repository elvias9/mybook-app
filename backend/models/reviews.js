module.exports = (sequelize, DataTypes) => {

  const Review = sequelize.define("review", {
      reviewId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      rating: {
          type: DataTypes.INTEGER
      },
      description: {
          type: DataTypes.TEXT
      }
  })

  return Review

}
