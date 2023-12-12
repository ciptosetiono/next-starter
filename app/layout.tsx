import '@/app/_components/ui/global.css'
import { inter } from '@/app/_components/ui/fonts'
import AppProvider from '@/app/_providers/app-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
