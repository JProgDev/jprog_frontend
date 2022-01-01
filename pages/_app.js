import Head from "next/head";
import Script from "next/script";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
