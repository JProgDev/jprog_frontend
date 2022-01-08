import { useEffect, useState } from "react";
import Head from "next/head";
import { Router } from "next/router";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/index.scss";
import Loader from "../components/common/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Navbar />
      <main>
        {loading && <Loader />}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
