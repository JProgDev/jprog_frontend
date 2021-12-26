import Navbar from "../components/layout/navbar/Navbar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
