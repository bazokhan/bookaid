import prisma from 'lib/prisma';
import { mutationType } from 'nexus';

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneAccount();
    t.crud.createOneCategory();
    t.crud.createOneClient();
    t.crud.createOneTx();
    t.crud.createOneUser();
    t.crud.updateOneAccount();
    t.crud.updateOneCategory();
    t.crud.updateOneClient();
    t.crud.updateOneTx();
    t.crud.updateOneUser();
    t.crud.createOnePermission({
      async resolve(root, args, ctx, info, originalResolve) {
        const { user } = ctx;
        const profileID = args.data?.user?.connect?.id;
        const accountID = args.data?.account?.connect?.id;
        if (!user) throw new Error('You are not logged in!');
        if (user?.id === profileID)
          throw new Error('You can not share your account with yourself');
        const account = await prisma.account.findUnique({
          where: { id: accountID },
          include: { permissions: true }
        });
        if (!account) throw new Error('Account not found!');
        if (account.userId !== user.id) throw new Error('Not authorized');
        console.log({ root, user, permissions: account.permissions });
        const res = await originalResolve(root, args, ctx, info);
        console.log('logic after the resolver');
        return res;
      }
    });
    t.crud.updateOnePermission();
    t.crud.deleteOnePermission();
  }
});
