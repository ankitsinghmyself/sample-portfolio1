import '../styles/globals.css';
import { useEffect, useState } from 'react';
import animation from '../styles/animation.module.css';
import BonusBall from '../components/BonusBall';

function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className={animation.loadingAnimation}>
          <BonusBall />
          <h3 className={animation.springyText}>Ankit</h3>
          <p></p>
          <div className={animation.springyLine}></div>
        </div>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
