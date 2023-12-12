import { auth } from '@/auth';
import Navbar from '@/app/_components/ui/navigation/navbar';
import MainCard from '@/app/_components/ui/card/main-card';
import Footer from '@/app/_components/ui/footer/footer';
import { logout } from '@/app/_lib/actions/auth-action';
//import Loading from '../loading';
export default async function Layout({ children }: { children: React.ReactNode }) {

  const session = await auth();
  const user = session?.user;

  return (
    <main>
      <Navbar
        user={user}
        onLogout={async() => {
          'use server';
          await logout();
        }}/>
      <MainCard>
        {children}
      </MainCard>
      <Footer/>
    </main>
  );
}