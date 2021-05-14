import { exposeAllFields } from 'helpers/exposeAllFields';
import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.email();
  }
});

export const Permission = objectType({
  name: 'Permission',
  definition(t) {
    exposeAllFields(t);
  }
});
