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

  if (res.status === 400) {
  const error = await res.json();
  throw new Error(`Error: ${error.error}`);
}


  if (!res.ok) {
    throw new Error('Error al guardar el usuario');
  }

  return res.json();
};
