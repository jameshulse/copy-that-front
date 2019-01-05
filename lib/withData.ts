import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
// import yoga server endpoint
import { endpoint, prodEndpoint } from "../config";
import { IncomingHttpHeaders } from "http";

interface CreateClientProps {
  headers?: IncomingHttpHeaders;
}

// headers are needed for authentication
function createClient({ headers }: CreateClientProps) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
    request: async operation => {
      await operation.setContext({
        fetchOptions: {
          // automatically include auth cookies
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
