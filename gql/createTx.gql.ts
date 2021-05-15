import { gql } from '@apollo/client';
import TxFragment from './fragments/tx.fragment';

export default gql`
  mutation CreateTx(
    $amount: Int!
    $date: DateTime
    $categoryID: Int
    $categoryName: String!
    $categoryType: CategoryType!
    $payerID: Int
    $payerName: String!
    $payerType: ClientType!
    $payeeID: Int
    $payeeName: String!
    $payeeType: ClientType!
    $userID: Int
  ) {
    createOneTx(
      data: {
        amount: $amount
        date: $date
        category: {
          connectOrCreate: {
            where: { id: $categoryID }
            create: { name: $categoryName, categoryType: $categoryType }
          }
        }
        payer: {
          connectOrCreate: {
            where: { id: $payerID }
            create: { name: $payerName, clientType: $payerType }
          }
        }
        payee: {
          connectOrCreate: {
            where: { id: $payeeID }
            create: { name: $payeeName, clientType: $payeeType }
          }
        }
        createdBy: { connect: { id: $userID } }
      }
    ) {
      ..TxFragment
    }
  }
  ${TxFragment}
`;
