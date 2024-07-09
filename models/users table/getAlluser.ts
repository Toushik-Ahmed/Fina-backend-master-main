import UserTable from './user';

export async function findAlluser() {
  const users = UserTable.findAll();
  return users;
}
