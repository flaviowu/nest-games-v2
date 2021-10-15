import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AccountModule, GameModule, GenreModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
