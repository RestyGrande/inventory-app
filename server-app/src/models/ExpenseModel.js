import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Expense extends Model {}
  Expense.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(50),
      },
      cost: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Expense",
    }
  );

  return Expense;
};
