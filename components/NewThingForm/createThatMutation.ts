import gql from 'graphql-tag';

const CREATE_THAT_MUTATION = gql`
  mutation CREATE_THAT_MUTATION(
    $title: String!
    $description: String!
    $source: String!
    $tags: [String]!
    $skills: [String]!
    $difficulty: Difficulty!
    $image: String!
    $largeImage: String!
  ) {
    createThat(
      title: $title
      description: $description
      source: $source
      tags: $tags
      skills: $skills
      difficulty: $difficulty
      image: $image
      largeImage: $largeImage
    ) {
      id
      title
    }
  }
`;

export default CREATE_THAT_MUTATION;
