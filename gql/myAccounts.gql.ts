import { gql } from '@apollo/client';
import AccountFragment from './fragments/account.fragment';

export default gql`
  query MyAccounts($userID: Int!) {
    myAccounts: accounts(
      where: {
        OR: [
          { userId: { equals: $userID } }
          { permissions: { some: { userId: { equals: $userID } } } }
        ]
      }
    ) {
      ...AccountFragment
    }
  }
  ${AccountFragment}
`;
