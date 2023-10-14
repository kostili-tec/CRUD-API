import { IncomingMessage } from 'http';

export interface IUserData {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
}

export type TypeUserDataArray = {
  users: IUserData[];
};

export interface IRequest extends IncomingMessage {
  users: IUserData[];
}
