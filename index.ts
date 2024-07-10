import express, { Express } from 'express';
import config from './config';
import sequelize from './models/users table/user';
import router from './routers/createuser';

const SECRET = process.env.SECRET;

const app: Express = express();

app.use(express.json());

app.use(router);
(async function bootstrap() {
  try {
    await sequelize.sync();
    app.listen(config.PORT, () => {
      console.log(`[server]: Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
