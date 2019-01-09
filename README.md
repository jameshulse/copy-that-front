# copy-that-front
The frontend for the app version of https://copythat.io

## Usage
* `yarn dev` to dev
* When adding new directories, remember to add to package.json script for linting checks etc.

### Adding Posts
1. Write your post in markdown
2. Add it as a `.mdx` file in `/pages/posts` with the name of the file matching the url of the post.
3. Add a `.tsx` file with the same name and add meta data and export a react component to render using the content from the MDX file. Meta is typed to help you. See other posts for examples.
