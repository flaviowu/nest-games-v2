import { Injectable } from '@nestjs/common';

//Prisma
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client'; //add Role

// Models
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

//Errors
// import { ForbiddenError } from '../../errors/forbidden.error';

//Bcrypt
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.AccountInclude = {
    profiles: {
      select: {
        id: true,
        title: true,
        image: true,
      },
    },
    favoriteGames: {
      select: {
        id: true,
        title: true,
        cover: true,
      },
    },
  };

  async create(dto: CreateAccountDto): Promise<Account> {
    const data: Prisma.AccountUncheckedCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      profiles: {
        create: {
          title: dto.name,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        },
      },
    };

    const createdAccount = await this.prisma.account.create({ data });
    return {
      ...createdAccount,
      password: undefined,
    };
  }

  findAll() {
    return this.prisma.account.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({
      where: { id },
    });
  }

  findById(id: number) {
    return this.prisma.account.findUnique({
      where: { id },
      include: this._include,
    });
  }

  findByEmail(email: string) {
    return this.prisma.account.findUnique({
      where: { email },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateAccountDto) {
    const favoriteGamesIds = dto.favoriteGamesId;
    const removeFavoriteGamesIds = dto.removeFavoriteGamesId;

    delete dto.favoriteGamesId;
    delete dto.removeFavoriteGamesId;

    const data: Prisma.AccountUpdateWithoutProfilesInput = {
      ...dto,

      favoriteGames: {
        connect: favoriteGamesIds?.map((gameId) => ({ id: gameId })) || [],
        disconnect:
          removeFavoriteGamesIds?.map((gameId) => ({ id: gameId })) || [],
      },
    };

    return this.prisma.account.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.account.delete({ where: { id } });
  }
}
