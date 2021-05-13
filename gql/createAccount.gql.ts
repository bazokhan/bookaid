import { gql } from '@apollo/client';
import AccountFragment from './fragments/account.fragment';

export default gql`
  mutation CreateAccount($userID: Int!, $name: String!) {
    createOneAccount(
      data: {
        name: $name
        owner: { connect: { id: $userID } }
        client: { create: { name: $name, clientType: ACCOUNT } }
      }
    ) {
      ...AccountFragment
    }
  }
  ${AccountFragment}
`;
