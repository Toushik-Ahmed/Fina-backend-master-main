import { Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ExtendedRequest } from '../interfaces/extendedRequest';
import UserTable from '../models/users table/user';
const SECRET: string = process.env.SECRET || '';

export const authMiddleware = async (
  req: ExtendedRequest,
  res: Response,
  next: Function
) => {
  // extract token from auth headers
  const authHeaders = req.headers['authorization'];
  console.log(authHeaders);
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    // verify & decode token payload,
    const verifiedToken = verify(token, SECRET);
    if (typeof verifiedToken !== 'string') {
      const user = await UserTable.findOne({ where: { id: verifiedToken.id } });
      if (!user) return res.sendStatus(401);
      req.user = user;
    } else {
      throw new Error();
    }
    // attempt to find user object and set to req

    next();
  } catch (error) {
    res.sendStatus(401);
  }
};
