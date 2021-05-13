import { exposeAllFields } from 'helpers/exposeAllFields';
import { objectType } from 'nexus';

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.owner();
    t.model.client();
    t.model.clientsVisible();
    t.model.categoriesVisible();
  }
});

export const AccountClient = objectType({
  name: 'AccountClient',
  definition(t) {
    exposeAllFields(t);
  }
});

export const AccountCategory = objectType({
  name: 'AccountCategory',
  definition(t) {
    exposeAllFields(t);
  }
});
