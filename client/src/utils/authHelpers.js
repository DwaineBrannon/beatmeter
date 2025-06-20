import { auth } from '@/config/firebase';

export async function getIdToken() {
  const user = auth.currentUser;
  if (!user) throw new Error('User not authenticated');
  return await user.getIdToken();
}
