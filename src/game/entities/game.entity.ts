import { Account } from '../../account/entities/account.entity';
import { Genre } from '../../genre/entities/genre.entity';

export class Game {
  id?: number;
  title: string;
  cover: string;
  year: string;
  description: string;
  trailer: string;
  gameplay: string;
  rating?: number;

  accounts?: Account[];
  genres?: Genre[];
}
