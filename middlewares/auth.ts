const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import UserTable from '../models/users table/user';
import { ExtendedRequest } from '../interfaces/extendedRequest';
const SECRET = process.env.SECRET
// REMOVE-END

const authMiddleware = async (req:ExtendedRequest, res:Response, next:Function) => {
  // REMOVE-START
  // extract token from auth headers
  const authHeaders = req.headers['authorization'];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(' ')[1];

  try {
    // verify & decode token payload,
    const { id } = jwt.verify(token, SECRET);
    // attempt to find user object and set to req
    const user = await UserTable.findOne({ where:{id} });
    if (!user) return res.sendStatus(401);
    req.user = user;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
  // REMOVE-END
};

module.exports = authMiddleware;