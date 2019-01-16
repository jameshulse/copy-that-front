import * as React from 'react';
import Head from 'next/head';
import defaultSEO from '../lib/defaultSEO';
import styled from './styles/styled-components';

const BlogContainer = styled.div`
  max-width: ${props => props.theme.maxWidth}px;
`;

interface BlogAuthor {
  name: string,
  avatar: string, // e.g. '/static/james.jpg'
  twitter?: string,
}

interface BlogPostMeta {
  title: string,
  description: string,
  date: string, // e.g. '2019-01-05'
  author: BlogAuthor,
  url: string // e.g. 'https://copythat.io/blog/blog-post-name'
  link: string // e.g. '/blog/blog-post-name'
  twitterCard?: string, // e.g. '/static/twitter-cards/card-name.png'
}

interface BlogPostProps {
  meta: BlogPostMeta,
  children: React.ReactNode,
}

const BlogPost = ({ meta, children }: BlogPostProps) =>
  <>
    <Head>
      <title key="title">{meta.title}</title>
      <meta key="description" name="description" content={meta.description}/>
      <meta key="og:url" name="og:url" content={meta.url}/>
      <meta key="og:title" name="og:title" content={meta.title}/>
      <meta key="og:description" name="og:description" content={meta.description}/>
      <meta key="og:image" name="og:image" content={meta.twitterCard ? meta.twitterCard : defaultSEO.openGraph.image}/>
    </Head>
    <BlogContainer>
      {children}
    </BlogContainer>
  </>;

export default BlogPost;
export { BlogAuthor, BlogPostMeta, BlogPostProps };
