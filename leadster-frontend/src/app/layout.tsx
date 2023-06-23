import { Footer } from '@/components/footer'
import './globals.css'
import { Header } from '@/components/header'
import { Plus_Jakarta_Sans} from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight:['200','300', '400','500', '600', '700', '800'] 
})

export const metadata = {
  title: 'Leadster',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}