import { Game } from 'src/game/entities/game.entity';
import { Profile } from '../../profile/entities/profile.entity';

export class Account {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  cpf: string;
  profiles?: Profile[];
  favoriteGames?: Game[];
}
