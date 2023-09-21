import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import { MobileMenuProvider } from './hooks/useMobileMenu';



export const metadata = {
  title: 'description',
  description: 'Maria Bonete Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Maria Bonete Frontend Developer</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </head>
      <body>
        <MobileMenuProvider>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </MobileMenuProvider>
      </body>
    </html>
  )
}
