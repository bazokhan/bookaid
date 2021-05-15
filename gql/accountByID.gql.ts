import { gql } from '@apollo/client';
import AccountFragment from './fragments/account.fragment';

export default gql`
  query AccountByID($accountID: Int!) {
    account(where: { id: $accountID }) {
      ...AccountFragment
    }
  }
  ${AccountFragment}
`;
