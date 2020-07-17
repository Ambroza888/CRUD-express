import { Sequelize, DataTypes } from 'sequelize';
import { db } from '@crud/database';

export const User = db.define('user', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  }
})