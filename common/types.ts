export interface LoginForm extends HTMLInputElement {
  username: HTMLInputElement;
  password: HTMLInputElement;
  rpassword?: HTMLInputElement;
  email?: HTMLInputElement;
}

export type User = {
  id: number,
  username?: string
};

export type Account = {
  id: number,
  name?: string
};
