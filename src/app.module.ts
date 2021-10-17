import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { PrismaService } from './prisma/prisma.service';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AccountModule, GameModule, GenreModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ProfileService],
})
export class AppModule {}
