const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {  // Definimos el modelo usuario (User)
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false });
};
