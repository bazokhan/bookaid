import { ApolloServer } from 'apollo-server-micro';

import { getLoginSession } from 'lib/auth';
import { findUser } from 'lib/user';
import prisma from 'lib/prisma';

import schema from './schema';

const apolloServer = new ApolloServer({
  schema,
  playground: {
    settings: {
      'request.credentials': 'same-origin'
    }
  },
  context: async ({ req, connection }) => {
    if (connection) {
      // Operation is a Subscription
      // Obtain connectionParams-provided token from connection.context
      const token = connection.context.authorization || '';
      return { token, prisma };
    }
    // Operation is a Query/Mutation
    // Obtain header-provided token from req.headers
    // const token = req.headers.authorization || '';
    const token = req.cookies.token || '';
    const session = await getLoginSession(req);
    const user = (session && (await findUser(session))) ?? null;
    return { token, user, prisma };
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({
  path: '/api/graphql'
});
