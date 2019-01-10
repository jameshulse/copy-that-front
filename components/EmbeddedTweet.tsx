import React from 'react';
import Head from 'next/head';
import styled from './styles/styled-components';
import media from './styles/media';

const TweetStyles = styled.div`
  ${media.mobile`max-width: calc(100vw - 4rem);`}
`;

const EmbeddedTweet = ({ blockQuoteHtml }: { blockQuoteHtml: string }) => {
  const tweetHtml = {__html: blockQuoteHtml};
  return (
    <>
      <Head>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"/>
      </Head>
    <TweetStyles className='HERERE IA MA' dangerouslySetInnerHTML={tweetHtml}/>
    </>
  );
};

export default EmbeddedTweet;
