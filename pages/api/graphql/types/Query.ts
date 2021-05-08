/* eslint-disable no-underscore-dangle */
import { queryType, enumType } from 'nexus';

const SortOrder = enumType({ name: 'SortOrder', members: ['asc', 'desc'] });

export const Query = queryType({
  definition(t) {
    t.crud.user();
    t.crud.users({ filtering: true, pagination: true, ordering: true });

  
  }
});
