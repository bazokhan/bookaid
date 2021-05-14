import { gql } from '@apollo/client';

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
      id
      name
    }
    clientsVisible {
      id
      client {
        id
        name
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
`;
