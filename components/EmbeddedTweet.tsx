import React from 'react';
import Head from 'next/head';

const EmbeddedTweet = ({ blockQuoteHtml }: { blockQuoteHtml: string }) => {
  const tweetHtml = {__html: blockQuoteHtml};
  return (
    <>
      <Head>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"/>
      </Head>
      <div dangerouslySetInnerHTML={tweetHtml}/>
    </>
  );
};

export default EmbeddedTweet;
