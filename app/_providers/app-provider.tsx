import ThemeProviders from '@/app/_providers/theme-provider';
import { AuthProvider } from './auth-provider';

export default async function AppProvider({ children}:{ children: React.ReactNode}) {
  return (
    <ThemeProviders>
        {children}
    </ThemeProviders>
  );
}