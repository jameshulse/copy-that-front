import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ThatCard from './ThatCard';
import ThatsStyles from './ThatsStyles';

/**
 * Takes an array and concats the first element to increase
 * it's length to the given number
 */
function dupe<T>(num: number, arr: T[]): T[] {
  return num === 0 ? arr : dupe(num-1, arr.concat(arr[0]));
}

const ALL_THATS_QUERY = gql`
  query ALL_THATS_QUERY {
    thats {
      id
      title
      image
      largeImage
      tags {
        name
      }
    }
  }
`;

const Thats = () =>
  <ThatsStyles>
    <Query query={ALL_THATS_QUERY}>
    {
      ({ data }) =>
        dupe(12, data.thats).map(that => <ThatCard that={that} />)
    }
    </Query>
  </ThatsStyles>;

export default Thats;
