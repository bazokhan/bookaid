import { Account, User, Permission } from '@prisma/client';

export interface LoginForm extends HTMLInputElement {
  username: HTMLInputElement;
  password: HTMLInputElement;
  rpassword?: HTMLInputElement;
  email?: HTMLInputElement;
}

export interface PermissionData extends Permission {
  user?: User;
}
export interface AccountData extends Account {
  permissions?: PermissionData[];
}
