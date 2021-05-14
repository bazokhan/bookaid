import { gql } from '@apollo/client';

export default gql`
  mutation DeleteAccountPermission($permissionID: Int!) {
    deleteOnePermission(where: { id: $permissionID }) {
      id
    }
  }
`;
