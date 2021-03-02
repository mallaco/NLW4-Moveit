import '../style/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Move.it</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
