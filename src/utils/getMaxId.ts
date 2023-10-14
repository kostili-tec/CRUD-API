import { IUserData } from '../types/interfaces.js';

export const getMaxId = (array: IUserData[]) => {
  const sortedArr = array.sort((a, b) => Number(b.id) - Number(a.id));
  if (sortedArr) {
    const maxId = Number(sortedArr[0].id);
    return String(maxId + 1);
  } else return '1';
};
