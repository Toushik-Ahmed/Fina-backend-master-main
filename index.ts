import cors from 'cors';
import express, { Express } from 'express';
import config from './config';
import sequelize from './models/';
import { AccountLogTable } from './models/accountsLogTable/accountsLog';
import { AccountsTable } from './models/accountsTable/accounts';
import Budgetstable from './models/budgetsTable/budget';
import { MerchantTable } from './models/merchantsTable/merchantsTable';
import Transactionstable from './models/transactionsTable/transactions';
import UserTable from './models/users table/user';
import router from './routers/router';

const SECRET = process.env.SECRET;

const app: Express = express();
app.use(cors());

app.use(express.json());

app.use(router);
(async function bootstrap() {
  try {
    await sequelize.sync();
    await AccountsTable.sync();
    await UserTable.sync();
    await MerchantTable.sync();
    await Transactionstable.sync();
    await AccountLogTable.sync();
    await Budgetstable.sync();
    app.listen(config.PORT, () => {
      console.log(`[server]: Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
