import Footer from '@/components/Footer'
import '../styles/globals.css'
import Header from '@/components/Header'

export const metadata = {
    title: "Let Us Not Disturb || Lehza.in"
    // description: 'Discover and Share AI quotes'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </body>
    </html>
  )
}