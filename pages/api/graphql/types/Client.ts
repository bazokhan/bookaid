import prisma from 'lib/prisma';
import { objectType } from 'nexus';

export const Client = objectType({
  name: 'Client',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.account();
    t.model.asPayer();
    t.model.asPayee();
    t.list.field('txes', {
      type: 'Tx',
      async resolve(root) {
        return prisma.tx.findMany({
          where: { OR: [{ payeeId: root.id }, { payerId: root.id }] }
        });
      }
    });
  }
});
