import { gql } from '@apollo/client';
import ProfileFragment from './fragments/profile.fragment';

export default gql`
  query ProfilesByUsername($username: String) {
    users(where: { username: { contains: $username } }) {
      ...ProfileFragment
    }
  }
  ${ProfileFragment}
`;
