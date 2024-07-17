import { User } from '../../interfaces/user.interface';
import UserTable from './user';

const create = async (person: User) => {
  try {
    const user = await UserTable.create({
      username: person.username,
      email: person.email,
      password: person.password,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
 export default create  