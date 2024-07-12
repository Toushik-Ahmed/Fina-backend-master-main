import { compare, hash } from 'bcrypt';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import UserTable from '../models/users table/user';
const SECRET: string = process.env.SECRET || '';

export async function createUser(req: Request, res: Response) {
  const { username, email, password } = req.body;

  try {
    // Check if user with the same email already exists
    const existingUser = await UserTable.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: 'Conflict', message: 'User already exists' });
    }

    // Hash the password
    const passwordHash = await hash(password, 10);

    // Create a new user instance
    const newUser = await UserTable.create({
      username,
      email,
      password: passwordHash,
    });

    // Generate JWT token
    const accessToken = sign({ id: newUser.id }, SECRET);

    // Respond with success and token
    res.status(201).json({ accessToken });
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error);
    res.status(400).json({ error, message: 'Could not create user' });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await UserTable.findOne({ where: { email } });
    if (!user) {
      throw new Error();
    }
    const validatePass = await compare(password, user.password);
    if (!validatePass) throw new Error();
    const accessToken = sign({ id: user.id }, SECRET);
    res.status(200).send({ accessToken });
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
}
