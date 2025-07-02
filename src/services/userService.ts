import userData from '../data/users.json';
import type { User } from '../models/user';

export const getUsers = (): User[] => {
    return userData;
};
