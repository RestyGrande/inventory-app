import { Model, DataTypes, Op } from "sequelize";
const models = require("../models").default;

export default (sequelize) => {
  class Sale extends Model {
    static associate(models) {
      Sale.belongsTo(models.Product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
    static async getAllSaleByDate(startedDate, endDate) {
      const saleRecord = await Sale.findAll({
        where: { date: { [Op.between]: [startedDate, endDate] } },
      });

      let net_sales = 0;
      if (saleRecord.length === 0) {
        net_sales = 0;
      } else {
        net_sales = saleRecord
          .map((src) => src.unitPrice * src.quantity)
          .reduce((x, y) => x + y);
      }
      const purchaseRecord = await models.Purchase.findAll({
        where: { date: { [Op.between]: [startedDate, endDate] } },
      });

      let cost_of_sales = 0;
      if (purchaseRecord.length === 0) {
        cost_of_sales = 0;
      } else {
        cost_of_sales = purchaseRecord
          .map((src) => src.unitCost * src.quantity)
          .reduce((x, y) => x + y);
      }

      const expenseRecord = await models.Expense.findAll({
        where: { date: { [Op.between]: [startedDate, endDate] } },
      });

      let operating_expense = 0;
      if (expenseRecord.length === 0) {
        operating_expense = 0;
      } else {
        operating_expense = expenseRecord
          .map((src) => src.cost)
          .reduce((x, y) => x + y);
      }

      return {
        net_sales,
        cost_of_sales,
        operating_expense,
      };
    }
  }

  Sale.init(
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
      unitPrice: {
        type: DataTypes.DOUBLE,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Sale",
    }
  );

  return Sale;
};
