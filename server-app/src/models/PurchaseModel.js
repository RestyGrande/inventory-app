import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Purchase extends Model {
    static associate(models) {
      Purchase.belongsTo(models.Product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Purchase.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      unitCost: {
        type: DataTypes.DOUBLE,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Purchase",
    }
  );

  return Purchase;
};
