import { nexusPrisma } from 'nexus-plugin-prisma';

import * as path from 'path';

import { makeSchema } from 'nexus';

import { applyMiddleware } from 'graphql-middleware';

import { permissions } from './permissions';
import * as types from './types';

const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      outputs: {
        typegen: path.join(process.cwd(), 'generated', 'nexus-prisma.d.ts')
      }
    })
  ],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.d.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  }
});

const schemaWithMiddleware = applyMiddleware(schema, permissions);

export default schemaWithMiddleware;
