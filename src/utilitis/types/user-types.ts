export interface User {
  id: string;
  username: string;
  email: string;
  password:string;
  creationDate: Date;
  role: Role;
}

export interface Role {
  id: string;
  roleLvl: number;
  roleName: string;
}
