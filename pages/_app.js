import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
