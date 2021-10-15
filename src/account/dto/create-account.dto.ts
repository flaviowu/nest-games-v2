import { Account } from '../entities/account.entity';
import { CreateProfileDto } from '../../profile/dto/create-profile.dto';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsArray,
  IsInt,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAccountDto extends Account {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @IsString()
  cpf: string;

  @ValidateNested({ each: true })
  @Type(() => CreateProfileDto)
  @IsArray()
  profiles: CreateProfileDto[];

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  favoriteGamesId?: number[];
}
