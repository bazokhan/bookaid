import { objectType } from 'nexus';

export const Tx = objectType({
  name: 'Tx',
  definition(t) {
    t.model.id();
    t.model.payer();
    t.model.payee();
    t.model.category();
    t.model.amount();
  }
});
