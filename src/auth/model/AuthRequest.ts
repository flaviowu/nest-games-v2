import { Request } from 'express';
import { Account } from '../../account/entities/account.entity';
// import { User } from '../../domain/user/entities/user.entity;

export interface AuthRequest extends Request {
  principal: Account;
}
