import Link from 'next/link';
import styled from '../../components/styles/styled-components';
import IPostMeta from '../../types/IPostMeta';
import format from 'date-fns/format';

const toWords = (date: string | Date) => format(date, 'Do MMM yyyy');

function importAll(r) {
  return r.keys().map(r);
}

const posts = importAll(
  // @ts-ignore FIXME
  require.context('./', false, /.mdx$/)
);

interface IPostPreviewProps {
  meta: IPostMeta
}

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

const PostPreview = ({ meta }: IPostPreviewProps) =>
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

const postPreviews = posts
  .map(({ meta }) => <PostPreview meta={meta} />);

export default () =>
  <div>
    {postPreviews}
  </div>;
