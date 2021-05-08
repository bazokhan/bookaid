import { gql } from '@apollo/client';
import ProfileFragment from './fragments/profile.fragment';

export default gql`
  query Users {
    users {
      ...ProfileFragment
    }
  }
  ${ProfileFragment}
`;
