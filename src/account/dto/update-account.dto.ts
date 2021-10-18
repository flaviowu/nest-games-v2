import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsInt, IsOptional } from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {
  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  favoriteGamesId?: number[];

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  removeFavoriteGamesId?: number[];
}
