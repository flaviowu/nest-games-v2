import { Profile } from '../../profile/entities/profile.entity';
import { Game } from '../../game/entities/game.entity';

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
