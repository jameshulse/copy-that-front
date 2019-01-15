import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ThatCard from './ThatCard';

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
  <div>
    <Query query={ALL_THATS_QUERY}>
    {
      ({ data }) =>
        data.thats.map(that => <ThatCard that={that} />)
    }
    </Query>
  </div>;

export default Thats;
