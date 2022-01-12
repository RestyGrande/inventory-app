import { Model, DataTypes } from "sequelize";
const models = require("../models").default;

export default (sequelize) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Purchase, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Product.hasMany(models.Sale, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
    static async inventory() {
      try {
        const currentInventory = [];
        const products = await models.Product.findAll();
        for (const product of products) {
          const salesCount = await models.Sale.sum("quantity", {
            where: { ProductId: product.id },
          });
          const purchaseCount = await models.Purchase.sum("quantity", {
            where: { ProductId: product.id },
          });

          purchaseCount ||= 0;
          salesCount ||= 0;

          currentInventory.push({
            name: product.name,
            inventory_count: purchaseCount - salesCount,
          });
        }

        return currentInventory;
      } catch (err) {
        return err;
      }
    }
  }

  Product.init(
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
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};
