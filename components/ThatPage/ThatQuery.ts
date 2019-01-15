import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { That } from '../../schema';

const THAT_QUERY = gql`
  query THAT_QUERY($id: ID!) {
    that(where: { id: $id }) {
      title
      description
      image
      largeImage
      source
      difficulty
      tags {
        name
      }
      skills {
        name
      }
    }
  }
`;

interface Data {
  that: That
};

interface Variables {
  id: string; 
};

class ItemQuery extends Query<Data, Variables> {}

export default ItemQuery;
export { THAT_QUERY };
