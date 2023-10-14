import { IUserData } from '../types/interfaces.js';

export const checkFields = (requestObj: IUserData): requestObj is IUserData => {
  return (
    typeof requestObj.username === 'string' &&
    typeof requestObj.age === 'number' &&
    !requestObj.id &&
    Array.isArray(requestObj.hobbies) &&
    requestObj.hobbies.every((hobby) => typeof hobby === 'string')
  );
};
