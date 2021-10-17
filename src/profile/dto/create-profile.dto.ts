import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  @IsInt()
  accountId: number;
}
