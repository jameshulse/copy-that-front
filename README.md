# copy-that-front
The frontend for the app version of https://copythat.io

## Usage
* `yarn dev` to dev
* `yarn build` to build into `./next` directory
* `yarn start` to run the build 
* `now` to deploy (runs automatically from master branch of this github repo)

### Adding Posts
1. Write your post in markdown
2. Add it as a `.mdx` file in `/pages/posts` with the name of the file matching the url of the post.
3. Add a `.tsx` file with the same name and add meta data and export a react component to render using the content from the MDX file. Meta is typed to help you. See other posts for examples.

### Analysing bundle size
* `yarn analyse` builds an html file that will open automatically in your browser to visualise your dependencies (uses [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)).
* There is also a stats file generated at `.next/server/stats.json`.
