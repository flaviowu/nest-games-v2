import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

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
      },
    },
  };

  create(dto: CreateAccountDto) {
    const data: Prisma.AccountUncheckedCreateInput = {
      ...dto,
      profiles: {
        create: {
          title: dto.name,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        },
      },
    };

    return this.prisma.account.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.account.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateAccountDto) {
    const favoriteGamesIds = dto.favoriteGamesId;

    delete dto.favoriteGamesId;

    const data: Prisma.AccountUpdateWithoutProfilesInput = {
      ...dto,

      // profiles: {
      //   connectOrCreate: dto.profiles.map((updateProfileDto) => ({
      //     where: { id: updateProfileDto.id },
      //     update: {
      //       title: updateProfileDto.title,
      //       image: updateProfileDto.image,
      //     },
      //     create: {
      //       title: updateProfileDto.title,
      //       image: updateProfileDto.image,
      //     },
      //   })),
      // },

      favoriteGames: {
        set: favoriteGamesIds?.map((gameId) => ({ id: gameId })) || [],
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
