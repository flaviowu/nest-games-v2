import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.GameInclude = {
    genres: {
      select: {
        id: true,
        name: true,
      },
    },
  };

  create(dto: CreateGameDto) {
    const genreIds = dto.genreIds;

    delete dto.genreIds;

    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        connect: genreIds.map((genreId) => ({ id: genreId })),
      },
    };

    return this.prisma.game.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.game.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateGameDto) {
    const genreIds = dto.genreIds;

    delete dto.genreIds;

    const data: Prisma.GameUpdateInput = {
      ...dto,
      genres: {
        set: genreIds?.map((genreId) => ({ id: genreId })) || [],
      },
    };

    return this.prisma.game.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({ where: { id } });
  }
}
