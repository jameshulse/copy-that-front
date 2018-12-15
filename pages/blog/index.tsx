function importAll(r) {
  return r.keys().map(r);
}

const posts = importAll(
  // @ts-ignore FIXME
  require.context('./', false, /.mdx$/)
);

const postPreviews = posts
  .map(({ meta }) =>
    <a href={meta.link}>
      <div>
        <h4>{meta.title}</h4>
        <p>{meta.date}</p>
      </div>
    </a>
  );

export default () =>
  <div>
    {postPreviews}
  </div>;
