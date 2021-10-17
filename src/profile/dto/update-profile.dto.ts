import { IsNotEmpty, IsString } from 'class-validator';
// import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
