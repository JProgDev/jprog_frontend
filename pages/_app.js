import Script from "next/script";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
