import App from 'next/app'
 
export default function MyApp({ Component, pageProps, example }) {
  return (
    <>
      <p>Data: {example}</p>
      <Component {...pageProps} />
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}