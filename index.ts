import cors from 'cors';
import express, { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import config from './config';
import sequelize from './models/';
import { AccountLogTable } from './models/accountsLogTable/accountsLog';
import { AccountsTable } from './models/accountsTable/accounts';

import Budgetstable from './models/budgetsTable/budget';
import { MerchantTable } from './models/merchantsTable/merchantsTable';
import { createTransaction } from './models/transactionsTable/transactionQuery';
import Transactionstable from './models/transactionsTable/transactions';
import UserTable from './models/users table/user';
import router from './routers/router';

const RANDOM_TIME_START = 60000;
const RANDOM_TIME_END = 120000;

const app: Express = express();
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(router);

const server = http.createServer(app);

const socketIo = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

socketIo.on('connection', (socket) => {
  socket.emit('connected', socket.id);
});

const getRandomNumber = (from: number, to: number) => {
  return Math.round(Math.random() * (to - from) + from);
};

const dummyCategories = [
  'clothing',
  'groceries',
  'game',
  'others',
  'transport',
];
const dummyMerchants = ['aarong', 'walmart'];

const emitNewTransaction = async () => {
  await createTransaction({
    amount: getRandomNumber(400, 2000),
    category: dummyCategories[getRandomNumber(0, 4)],
    merchantName: dummyMerchants[getRandomNumber(0, 1)],
    type: 'auto',
    userId: 1,
    merchantId: 1
  });
  socketIo.emit('new-transaction');
  setTimeout(
    emitNewTransaction,
    getRandomNumber(RANDOM_TIME_START, RANDOM_TIME_END)
  );
};

setTimeout(() => {
  emitNewTransaction();
}, getRandomNumber(RANDOM_TIME_START, RANDOM_TIME_END));

async function bootstrap() {
  try {
    await sequelize.sync();
    await UserTable.sync();
    await AccountsTable.sync();
    await Budgetstable.sync();
    await MerchantTable.sync();
    await Transactionstable.sync();
    await AccountLogTable.sync();

    server.listen(config.PORT, () => {
      console.log(`[server]: Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
