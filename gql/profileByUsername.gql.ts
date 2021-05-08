import { gql } from '@apollo/client';
import ProfileFragment from './fragments/profile.fragment';

export default gql`
  query ProfileByUsername($username: String) {
    user(where: { username: $username }) {
      ...ProfileFragment
    }
  }
  ${ProfileFragment}
`;
