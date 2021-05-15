import prisma from 'lib/prisma';
import { mutationType } from 'nexus';

const authorizeAccount = async (ctx, accountID, role = 'ADMIN') => {
  const { user } = ctx;
  if (!user) return new Error('You are not logged in!');
  const account = await prisma.account.findUnique({
    where: { id: accountID },
    include: { permissions: true }
  });
  if (!account) return new Error('Account not found!');
  const isAuthorized = account.permissions.find(
    p => p.userId === user.id && p.role === role
  );
  if (account.userId !== user.id && !isAuthorized)
    return new Error('Not authorized');
  return null;
};

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
        const accountID = args.data?.account?.connect?.id;
        const error = await authorizeAccount(ctx, accountID);
        if (error) throw error;
        const res = await originalResolve(root, args, ctx, info);
        return res;
      }
    });
    t.crud.updateOnePermission({
      async resolve(root, args, ctx, info, originalResolve) {
        const permission = await prisma.permission.findUnique({
          where: { id: args.where?.id }
        });
        const error = await authorizeAccount(ctx, permission?.accountId);
        if (error) throw error;
        const res = await originalResolve(root, args, ctx, info);
        return res;
      }
    });
    t.crud.deleteOnePermission({
      async resolve(root, args, ctx, info, originalResolve) {
        const permission = await prisma.permission.findUnique({
          where: { id: args.where?.id }
        });
        const error = await authorizeAccount(ctx, permission?.accountId);
        if (error) throw error;
        const res = await originalResolve(root, args, ctx, info);
        return res;
      }
    });
  }
});
