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
  }
});
