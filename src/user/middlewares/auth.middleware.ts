import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ExpressRequestInterface } from '@app/types/expressRequest';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '@app/config';
import { UserService } from '@app/user/user.service';

interface JwtPayloadWithId {
  id: number;
  email: string;
  iat: number;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  async use(
    req: ExpressRequestInterface,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const authorizationHeader = req.headers['authorization'] as
      | string
      | undefined;
    if (!authorizationHeader) {
      req.user = null;
      next();
      return;
    }

    const token = authorizationHeader.split(' ')[1];

    try {
      const decode = verify(token, JWT_SECRET) as JwtPayloadWithId;
      const user = await this.userService.findById(decode.id);
      req.user = user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
