import '@styles/globals.css';

import { StoreProvider } from '@redux/StoreProvider';
import App from '@components/App';
export const metadata = {
  title: 'Pampers',
  description: 'Diapers, Baby Care, and Parenting Information | Pampers US',
}


const RootLayout = ({ children })=> {
 return (
    <html lang="en">
      
      <body>
       <StoreProvider>
        <App>
          {children}
        </App>
       </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout;