import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Prisma
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
//Autenticação
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
//endpoints
import { AccountModule } from './account/account.module';
import { ProfileModule } from './profile/profile.module';
import { ProfileService } from './profile/profile.service';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    AccountModule,
    GameModule,
    GenreModule,
    ProfileModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    ProfileService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
