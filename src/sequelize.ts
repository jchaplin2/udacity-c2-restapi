import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

console.log("varssss");
console.log(c);
// console.log(process.env.POSTGRES_USERNAME);
// console.log(process.env.POSTGRES_PASSWORD);
// console.log(process.env.POSTGRES_DATABASE);
// console.log(process.env.POSTGRES_HOST);
// console.log(process.env.AWS_REGION);
// console.log(process.env.AWS_MEDIA_BUCKET);
// console.log(process.env.AWS_PROFILE);
// console.log(process.env.JWT_SECRET);

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

