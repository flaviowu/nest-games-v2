import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsArray,
} from 'class-validator';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  trailer: string;

  @IsString()
  @IsNotEmpty()
  gameplay: string;

  @IsInt()
  @IsOptional()
  rating?: number;

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  genreIds?: number[];
}
