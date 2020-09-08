module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    itemName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemPrice: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    itemDescription: {
      type: Sequelize.STRING,
      allowNull: true
    },
    imageUpload: {
      type: Sequelize.STRING
    }
  });

  Item.associate = models => {
    Item.hasMany(models.Cart, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};
