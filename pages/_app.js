import Head from "next/head";
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Script from 'next/script'

const GOOGLE_TAG = "G-5Y98F7TMJB"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="gtag"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG}`}
      />
      <Script
        id="gStatistics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TAG}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <title>Zuidermeer Nieuws</title>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
      </Head>
      <Navbar><Component {...pageProps} /></Navbar>

    </>
  )
}

export default MyApp
