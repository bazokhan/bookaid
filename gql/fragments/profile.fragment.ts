import { gql } from '@apollo/client';

export default gql`
  fragment ProfileFragment on User {
    id
    username
    email
  }
`;
