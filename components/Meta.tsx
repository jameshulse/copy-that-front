import Head from "next/head";
import defaultSEO from '../lib/defaultSEO';
import { GA_TRACKING_ID } from '../lib/gtag';

export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <title>{defaultSEO.title}</title>
    <meta key="description" name="description" content={defaultSEO.description}/>
    <meta key="twitter:site" name="twitter:site" content={defaultSEO.twitter.handle}/>
    <meta key="og:url" name="og:url" content={defaultSEO.openGraph.url}/>
    <meta key="og:type" name="og:type" content={defaultSEO.openGraph.type}/>
    <meta key="og:title" name="og:title" content={defaultSEO.openGraph.title}/>
    <meta key="og:description" name="og:description" content={defaultSEO.openGraph.description}/>
    <meta key="og:image" name="og:image" content={defaultSEO.openGraph.image}/>
    <meta key="og:image:width" name="og:image:width" content={`${defaultSEO.openGraph.imageWidth}`}/>
    <meta key="og:image:height" name="og:image:height" content={`${defaultSEO.openGraph.imageHeight}`}/>
  {/* Google Analytics */}
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
  <script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-122265749-1');
    `
  }}/>
  </Head>
);
