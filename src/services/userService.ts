import userData from '../data/users.json';
import type { User } from '../models/user';

export const getUsers = (): User[] => {
    return userData;
};

export const saveUser = (user: User): void => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
};