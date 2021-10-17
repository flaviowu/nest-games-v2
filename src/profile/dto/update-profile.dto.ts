import { IsInt } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends CreateProfileDto {
  @IsInt()
  id: number;
}
