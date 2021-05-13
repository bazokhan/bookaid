import { queryType } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.crud.account();
    t.crud.accounts({ filtering: true, pagination: true, ordering: true });
    t.crud.category();
    t.crud.categories({ filtering: true, pagination: true, ordering: true });
    t.crud.client();
    t.crud.clients({ filtering: true, pagination: true, ordering: true });
    t.crud.tx();
    t.crud.txes({ filtering: true, pagination: true, ordering: true });
    t.crud.user();
    t.crud.users({ filtering: true, pagination: true, ordering: true });
  }
});
