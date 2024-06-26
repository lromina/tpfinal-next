

import { LoginForm } from '../components/users/login-form';
import { createServerClient } from '../utils/server';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}
