// import { LoginForm } from '../components/users/login-form';
// import { createServerClient } from '../utils/server';
// import { redirect } from 'next/navigation';
// import { revalidatePath } from 'next/cache';

// export default async function LoginPage(formData: FormData) {
//   // const supabase = createServerClient();
//   // const user = await supabase.auth.getUser();

//   // if (user){
//   //   redirect ('/dashboard')
//   // }

//   const supabase = createServerClient();


//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };

//   console.log('data',data)

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     redirect('/');
//   }

//   revalidatePath('/dashboard', 'layout');
//   redirect('/dashboard');
// }

// export async function Signup(formData: FormData) {
//   const supabase = createServerClient();

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     redirect('/error');
//   }

//   revalidatePath('/', 'layout');
//   redirect('/');

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <LoginForm />
//     </main>
//   );
// }


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
