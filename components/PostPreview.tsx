import * as React from 'react';
import format from 'date-fns/format';
import styled from 'styled-components';
import Link from 'next/link';
import { BlogPostMeta } from './BlogPost';

const toWords = (date: string | Date) => format(date, 'Do MMM yyyy');

const PostPreviewLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.notBlack};
`;

const PostPreviewCard = styled.div`
  border-radius: ${props => props.theme.spc}px;
  box-shadow: ${props => props.theme.standardShadow};
  padding: ${props => props.theme.spc}px ${props => props.theme.spc * 4}px;
  margin-bottom: ${props => props.theme.spc * 4}px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const PostPreview = ({ meta }: { meta: BlogPostMeta }) =>
  <Link key={meta.url} prefetch href={meta.link}>
    <PostPreviewLink>
      <PostPreviewCard>
        <div>
          <h4>{meta.title}</h4>
          <p>{toWords(meta.date)}</p>
        </div>
        <p>{meta.description}</p>
      </PostPreviewCard>
    </PostPreviewLink>
  </Link>;

export default PostPreview;
