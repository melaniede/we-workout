module.exports = function (sequelize, DataTypes) {
    const Cardio = sequelize.define("Cardio", {
      // 
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    });
  
    return Cardio;
  };