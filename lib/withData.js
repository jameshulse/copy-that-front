import { withApollo } from 'next-with-apollo';
// eslint-disable-next-line import/no-named-as-default
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          // automatically include auth cookies
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
