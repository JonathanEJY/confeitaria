import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface Payload {
  sub: string;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(" ");

  if (!token) {
    return res.status(401).end()
  }

  try{
    const {sub} = verify(
      token,
      process.env.JWT_SECRET as string
    ) as Payload;
    req.user = { uuid: sub };
    return next();
  } catch(err){
    return res.status(401).end()
  }
}

export default authMiddleware;