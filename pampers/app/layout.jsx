import '@styles/globals.css';

import Nav from '@components/Navbar/Nav';
import Footer from '@components/Footer/Footer';
import DiaperCalculator from './products/components/DiaperCalculator';
export const metadata = {
  title: 'Pampers',
  description: 'Diapers, Baby Care, and Parenting Information | Pampers US',
}


const RootLayout = ({ children })=> {
 return (
    <html lang="en">
      
      <body>
        <main>
          <Nav/> 
          <div className='px-12% py-28'>{children}</div>
          <DiaperCalculator/>
            <Footer/>
        </main>
      </body>
    </html>
  )
}

export default RootLayout;