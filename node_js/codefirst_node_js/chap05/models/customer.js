module.exports = (sequelize, DataTypes) => {
  const newCustomer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    reg_date: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return newCustomer;
};
