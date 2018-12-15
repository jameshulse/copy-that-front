import Link from 'next/link';
import styled from '../../components/styles/styled-components';
import IPostMeta from '../../types/IPostMeta';

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

const PostPreviewCard = styled.div`
  border-radius: ${props => props.theme.spc}px;
  box-shadow: ${props => props.theme.standardShadow};
  padding: ${props => props.theme.spc}px ${props => props.theme.spc * 4}px;
  margin-bottom: ${props => props.theme.spc * 4}px;
`;

const PostPreview = ({ meta }: IPostPreviewProps) =>
  <Link prefetch href={meta.link}>
    <a>
      <PostPreviewCard>
        <h4>{meta.title}</h4>
        <p>{meta.date}</p>
      </PostPreviewCard>
    </a>
  </Link>;

const postPreviews = posts
  .map(({ meta }) => <PostPreview meta={meta} />);

export default () =>
  <div>
    {postPreviews}
  </div>;
