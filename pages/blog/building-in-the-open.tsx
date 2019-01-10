import * as React from 'react';
import { BlogPostMeta } from '../../components/BlogPost';
import BlogPost from '../../components/BlogPost';
import Content from './building-in-the-open.mdx';

export const meta: BlogPostMeta = {
  title: 'Why I\'m building in the open',
  description: 'Why I\'m building Copy That in the open and pushing rubbish code sooner',
  date: '2019-01-05',
  author: {
    name: 'James Mulholland',
    avatar: '/static/james.jpg',
    twitter: 'mulholio',
  },
  url: 'https://copythat.io/blog/building-in-the-open',
  link: '/blog/building-in-the-open',
  twitterCard: '/static/twitter-cards/building-in-the-open.png',
};

export default () =>
  <BlogPost meta={meta}>
    <Content />
  </BlogPost>;
