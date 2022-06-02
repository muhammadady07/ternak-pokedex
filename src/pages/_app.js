import '@styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/graphql-apollo/index';
import { Layout } from '@components/index';
import '@fontsource/lato';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
