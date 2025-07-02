import type { User } from '../models/user';


export const getUsers = async () => {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Error fetching users');
  const data = await res.json();
  return data;
};

export const saveUser = async (user: User) => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

   if (res.status === 409) {
    const error = await res.json();
    throw new Error(error.error || 'ID duplicado');
  }

  if (!res.ok) {
    throw new Error('Error al guardar el usuario');
  }

  return res.json();
};
