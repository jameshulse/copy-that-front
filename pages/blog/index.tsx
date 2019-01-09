import * as React from 'react';
import PostPreview from '../../components/PostPreview';

/** gets all files in current directory */
function importAll(r) {
  return r.keys().map(r);
}

// @ts-ignore FIXME
const posts = importAll(require.context('./', false, /.tsx$/))
  .filter(exported => 'meta' in exported);

const BlogPage = () =>
  <div>
    {
      posts.map(({ meta }) =>
        <PostPreview key={meta.url} meta={meta} />)
    }
  </div>;

export default BlogPage;
