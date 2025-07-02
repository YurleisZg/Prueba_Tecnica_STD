import type { User } from '../models/user';


export const getUsers = async () => {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Error fetching users');
  return res.json();
};

export const saveUser = async (user: User) => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error('Error saving user');
  return res.json();
};
