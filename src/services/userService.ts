import userData from '../data/users.json';
import type { User } from '../models/user';

const storagekey = 'users-data';

export const getUsers = (): User[] => {
    const storedUsers = localStorage.getItem(storagekey);
    if (storedUsers) {
        return JSON.parse(storedUsers)
    }   
    return userData;
};

export const saveUser = (user: User): void => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(storagekey, JSON.stringify(users));
};