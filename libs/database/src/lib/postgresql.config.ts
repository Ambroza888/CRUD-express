import { Sequelize } from 'sequelize';

export const db = new Sequelize('CRUD', 'postgres', 'klicktrack', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});