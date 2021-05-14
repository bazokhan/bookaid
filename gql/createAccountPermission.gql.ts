import { gql } from '@apollo/client';

export default gql`
  mutation CreateAccountPermission(
    $userID: Int!
    $accountID: Int!
    $role: Role!
  ) {
    createOnePermission(
      data: {
        user: { connect: { id: $userID } }
        account: { connect: { id: $accountID } }
        role: $role
      }
    ) {
      id
    }
  }
`;
