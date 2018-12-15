export default interface IPostMeta {
  title: string,
  description: string,
  date: Date,
  link: string, // /blog/post-name
  url: string, // https://copythat.io/blog/
  // TODO twitter card? Or auto-generate at least
}
