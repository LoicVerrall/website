// Import the global styles sheet
import '../styles/globals.css';
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};