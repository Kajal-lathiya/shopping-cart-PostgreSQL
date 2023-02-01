import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

const ProductsModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(2),
      allowNull: false
      },
      price: {
        type:DataTypes.INTEGER
    }
  }
);

export default ProductsModel;
