import { gql } from '@apollo/client';

export default gql`
  mutation UpdateAccountPermission($permissionID: Int!, $role: Role) {
    updateOnePermission(
      where: { id: $permissionID }
      data: { role: { set: $role } }
    ) {
      id
    }
  }
`;
