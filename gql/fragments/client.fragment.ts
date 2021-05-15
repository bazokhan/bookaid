import { gql } from '@apollo/client';
import TxFragment from './tx.fragment';

export default gql`
  fragment ClientFragment on Client {
    id
    name
    account {
      id
      name
    }
    asPayer {
      ...TxFragment
    }
    asPayee {
      ...TxFragment
    }
  }
  ${TxFragment}
`;
