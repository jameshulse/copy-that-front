import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
import Page from "../components/Page";

class CopyThatApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = { query: undefined };
    if (Component.getInitalProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props as any;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(CopyThatApp);
