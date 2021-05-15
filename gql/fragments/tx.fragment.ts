import { gql } from '@apollo/client';
import ProfileFragment from './profile.fragment';

export default gql`
  fragment TxFragment on Tx {
    id
    amount
    date
    payer {
      id
      name
    }
    payee {
      id
      name
    }
    category {
      id
      name
    }
    createdBy {
      ...ProfileFragment
    }
  }
  ${ProfileFragment}
`;
