import { Game } from 'src/game/entities/game.entity';
import { Profile } from '../../profile/entities/profile.entity';

export class Account {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  cpf: string;
  profiles?: Profile[];
  favoriteGames?: Game[];
}
