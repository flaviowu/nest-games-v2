import { Genre } from '../../genre/entities/genre.entity';

export class CreateGenreDto extends Genre {
  name: string;
  gamesId: number[];
}
