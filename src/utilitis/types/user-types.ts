export interface User {
  id: string;
  username: string;
  email: string;
  gameNickName: string;
  bankroll: number;
  creationDate: Date;
  lastPayed: Date;
  lastPlayed: Date;
  role: Role;
}

export interface Role {
  id: string;
  roleLvl: number;
  roleName: string;
}
