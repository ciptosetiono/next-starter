'use client'

import { ThemeProvider as NexTProvider} from 'next-themes'

export default function ThemeProviders({ children } : {children: React.ReactNode}) {
  return <NexTProvider attribute="class">{children}</NexTProvider>
}