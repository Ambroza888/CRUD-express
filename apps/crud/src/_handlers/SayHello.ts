import { Request, Response, NextFunction } from 'express';

export const SayHello = (req: Request, res: Response, next: NextFunction) => {
  return res.send({ message: 'Welcome to CRUD!' });
};