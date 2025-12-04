import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Binomialverteilung',
  description: 'Dokumentation zur Binomialverteilung und Stochastik',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-sans">
        <Header />
        <Sidebar />
        <main className="ml-64 mt-16 p-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
