import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Account } from '@prisma/client';
import { AuthRequest } from './model/AuthRequest';

export const AuthAccount = createParamDecorator(
  (data: keyof Account, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    const account: Account = request.body;

    return data ? account && account[data] : account;
  },
);
