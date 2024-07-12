import cors from 'cors';
import express, { Express } from 'express';
import config from './config';
import sequelize from './models/';
import CategoriesTable from './models/categoriesTable/categories';
import router from './routers/createuser';

const SECRET = process.env.SECRET;

const app: Express = express();
app.use(cors());

app.use(express.json());

app.use(router);
(async function bootstrap() {
  try {
    await sequelize.sync();
    await CategoriesTable.sync();
    app.listen(config.PORT, () => {
      console.log(`[server]: Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
