import '../styles/globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import animation from '../styles/animation.module.css';

function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className={animation.loadingAnimation}>
          <div className={animation.triangle}></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
