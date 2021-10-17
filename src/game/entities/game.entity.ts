import { Genre } from '../../genre/entities/genre.entity';

export class Game {
  id?: number;
  title: string;
  cover: string;
  year: string;
  description: string;
  trailer: string;
  gameplay: string;
  rating?: number | null;

  genres?: Genre[];
}
