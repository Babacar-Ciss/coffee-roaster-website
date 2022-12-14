import Layout from '../components/layout/Layout';
import { GlobalStyle } from '../styles/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>    
    </>
  )
}
 
export default MyApp;
