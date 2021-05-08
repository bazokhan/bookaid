import { ApolloError } from 'apollo-server-micro';

import { shield, allow } from 'graphql-shield';

// const rules = {
//   isAuthed: rule()((parent, args, context: Context): boolean => {
//     const user = context?.user
//     return !!user?.id
//   }),
// }

export const permissions = shield(
  {
    Query: {
      '*': allow
    }
  },
  {
    fallbackRule: allow,
    fallbackError: async (thrownThing /* parent, args, context, info */) => {
      if (thrownThing instanceof ApolloError) {
        // expected errors
        return thrownThing;
      }
      if (thrownThing instanceof Error) {
        // unexpected errors
        return new ApolloError(thrownThing.message);
      }
      return new ApolloError('Not Authorized!!');
    }
  }
);
