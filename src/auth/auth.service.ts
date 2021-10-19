import { Injectable } from '@nestjs/common';
import { Account } from '../account/entities/account.entity';
import { AccountPayload } from './model/AccountPayload';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';

import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from '../errors/unauthorized.error';
import { AccountToken } from './model/AccountToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: AccountService,
  ) {}

  async login(email: string, password: string): Promise<AccountToken> {
    const account: Account = await this.validateAccount(email, password);

    const payload: AccountPayload = {
      username: account.email,
      sub: account.id,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateAccount(email: string, password: string) {
    const account = await this.userService.findByEmail(email);
    if (account) {
      const isPasswordValid = await bcrypt.compare(password, account.password);

      if (isPasswordValid) {
        return { ...account, password: undefined };
      }
    }
    throw new UnauthorizedError(
      `Email address or password provided is incorrect.`,
    );
  }
}
