import { gql } from '@apollo/client';
import ClientFragment from './client.fragment';

export default gql`
  fragment AccountFragment on Account {
    id
    name
    owner {
      id
      username
      email
    }
    client {
      ...ClientFragment
    }
    clientsVisible {
      id
      client {
        ...ClientFragment
      }
    }
    categoriesVisible {
      id
      category {
        id
        name
      }
    }
    permissions {
      id
      user {
        id
        username
      }
      role
    }
  }
  ${ClientFragment}
`;
