import "../scss/styles.scss";
import Head from "next/head";
import Navbar from "./../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Github Repos</title>
      </Head>
      <Navbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
