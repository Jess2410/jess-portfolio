import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/assets/fav.png' />
        <meta
          name='description'
          content='Bienvenue sur mon portfolio. Vous pourrez y découvrir mes projets ainsi que mes compétences. Bonne visite. Jessica ^^'
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
