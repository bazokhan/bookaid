import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Account: Prisma.Account
  AccountCategory: Prisma.AccountCategory
  AccountClient: Prisma.AccountClient
  Permission: Prisma.Permission
  Client: Prisma.Client
  Category: Prisma.Category
  Tx: Prisma.Tx
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'emailVerified' | 'image' | 'hash' | 'salt' | 'createdAt' | 'updatedAt' | 'createdTx' | 'accounts' | 'status' | 'permissions'
      ordering: 'id' | 'username' | 'email' | 'emailVerified' | 'image' | 'hash' | 'salt' | 'createdAt' | 'updatedAt' | 'createdTx' | 'accounts' | 'status' | 'permissions'
    }
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'owner' | 'userId' | 'createdAt' | 'updatedAt' | 'permissions' | 'client' | 'clientId' | 'categoriesVisible' | 'clientsVisible'
      ordering: 'id' | 'name' | 'owner' | 'userId' | 'createdAt' | 'updatedAt' | 'permissions' | 'client' | 'clientId' | 'categoriesVisible' | 'clientsVisible'
    }
    accountCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'category' | 'accountId' | 'categoryId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'category' | 'accountId' | 'categoryId' | 'createdAt' | 'updatedAt'
    }
    accountClients: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'client' | 'accountId' | 'clientId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'client' | 'accountId' | 'clientId' | 'createdAt' | 'updatedAt'
    }
    permissions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'user' | 'role' | 'accountId' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'user' | 'role' | 'accountId' | 'userId' | 'createdAt' | 'updatedAt'
    }
    clients: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'clientType' | 'asPayer' | 'asPayee' | 'createdAt' | 'updatedAt' | 'account' | 'accountsVisible'
      ordering: 'id' | 'name' | 'clientType' | 'asPayer' | 'asPayee' | 'createdAt' | 'updatedAt' | 'account' | 'accountsVisible'
    }
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'categoryType' | 'createdAt' | 'updatedAt' | 'tx' | 'accountsVisible'
      ordering: 'id' | 'name' | 'categoryType' | 'createdAt' | 'updatedAt' | 'tx' | 'accountsVisible'
    }
    txes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
      ordering: 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
    }
  },
  User: {
    createdTx: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
      ordering: 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
    }
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'owner' | 'userId' | 'createdAt' | 'updatedAt' | 'permissions' | 'client' | 'clientId' | 'categoriesVisible' | 'clientsVisible'
      ordering: 'id' | 'name' | 'owner' | 'userId' | 'createdAt' | 'updatedAt' | 'permissions' | 'client' | 'clientId' | 'categoriesVisible' | 'clientsVisible'
    }
    permissions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'user' | 'role' | 'accountId' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'user' | 'role' | 'accountId' | 'userId' | 'createdAt' | 'updatedAt'
    }
  }
  Account: {
    permissions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'user' | 'role' | 'accountId' | 'userId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'user' | 'role' | 'accountId' | 'userId' | 'createdAt' | 'updatedAt'
    }
    categoriesVisible: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'category' | 'accountId' | 'categoryId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'category' | 'accountId' | 'categoryId' | 'createdAt' | 'updatedAt'
    }
    clientsVisible: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'client' | 'accountId' | 'clientId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'client' | 'accountId' | 'clientId' | 'createdAt' | 'updatedAt'
    }
  }
  AccountCategory: {

  }
  AccountClient: {

  }
  Permission: {

  }
  Client: {
    asPayer: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
      ordering: 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
    }
    asPayee: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
      ordering: 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
    }
    accountsVisible: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'client' | 'accountId' | 'clientId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'client' | 'accountId' | 'clientId' | 'createdAt' | 'updatedAt'
    }
  }
  Category: {
    tx: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
      ordering: 'id' | 'payer' | 'payee' | 'payerId' | 'payeeId' | 'amount' | 'date' | 'category' | 'createdBy' | 'createdAt' | 'updatedAt' | 'userId' | 'categoryId'
    }
    accountsVisible: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'account' | 'category' | 'accountId' | 'categoryId' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'account' | 'category' | 'accountId' | 'categoryId' | 'createdAt' | 'updatedAt'
    }
  }
  Tx: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    account: 'Account'
    accounts: 'Account'
    accountCategory: 'AccountCategory'
    accountCategories: 'AccountCategory'
    accountClient: 'AccountClient'
    accountClients: 'AccountClient'
    permission: 'Permission'
    permissions: 'Permission'
    client: 'Client'
    clients: 'Client'
    category: 'Category'
    categories: 'Category'
    tx: 'Tx'
    txes: 'Tx'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneAccountCategory: 'AccountCategory'
    updateOneAccountCategory: 'AccountCategory'
    updateManyAccountCategory: 'AffectedRowsOutput'
    deleteOneAccountCategory: 'AccountCategory'
    deleteManyAccountCategory: 'AffectedRowsOutput'
    upsertOneAccountCategory: 'AccountCategory'
    createOneAccountClient: 'AccountClient'
    updateOneAccountClient: 'AccountClient'
    updateManyAccountClient: 'AffectedRowsOutput'
    deleteOneAccountClient: 'AccountClient'
    deleteManyAccountClient: 'AffectedRowsOutput'
    upsertOneAccountClient: 'AccountClient'
    createOnePermission: 'Permission'
    updateOnePermission: 'Permission'
    updateManyPermission: 'AffectedRowsOutput'
    deleteOnePermission: 'Permission'
    deleteManyPermission: 'AffectedRowsOutput'
    upsertOnePermission: 'Permission'
    createOneClient: 'Client'
    updateOneClient: 'Client'
    updateManyClient: 'AffectedRowsOutput'
    deleteOneClient: 'Client'
    deleteManyClient: 'AffectedRowsOutput'
    upsertOneClient: 'Client'
    createOneCategory: 'Category'
    updateOneCategory: 'Category'
    updateManyCategory: 'AffectedRowsOutput'
    deleteOneCategory: 'Category'
    deleteManyCategory: 'AffectedRowsOutput'
    upsertOneCategory: 'Category'
    createOneTx: 'Tx'
    updateOneTx: 'Tx'
    updateManyTx: 'AffectedRowsOutput'
    deleteOneTx: 'Tx'
    deleteManyTx: 'AffectedRowsOutput'
    upsertOneTx: 'Tx'
  },
  User: {
    id: 'Int'
    username: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    hash: 'String'
    salt: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    createdTx: 'Tx'
    accounts: 'Account'
    status: 'UserStatus'
    permissions: 'Permission'
  }
  Account: {
    id: 'Int'
    name: 'String'
    owner: 'User'
    userId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    permissions: 'Permission'
    client: 'Client'
    clientId: 'Int'
    categoriesVisible: 'AccountCategory'
    clientsVisible: 'AccountClient'
  }
  AccountCategory: {
    id: 'Int'
    account: 'Account'
    category: 'Category'
    accountId: 'Int'
    categoryId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  AccountClient: {
    id: 'Int'
    account: 'Account'
    client: 'Client'
    accountId: 'Int'
    clientId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Permission: {
    id: 'Int'
    account: 'Account'
    user: 'User'
    role: 'Role'
    accountId: 'Int'
    userId: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Client: {
    id: 'Int'
    name: 'String'
    clientType: 'ClientType'
    asPayer: 'Tx'
    asPayee: 'Tx'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    account: 'Account'
    accountsVisible: 'AccountClient'
  }
  Category: {
    id: 'Int'
    name: 'String'
    categoryType: 'CategoryType'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    tx: 'Tx'
    accountsVisible: 'AccountCategory'
  }
  Tx: {
    id: 'Int'
    payer: 'Client'
    payee: 'Client'
    payerId: 'Int'
    payeeId: 'Int'
    amount: 'Int'
    date: 'DateTime'
    category: 'Category'
    createdBy: 'User'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    userId: 'Int'
    categoryId: 'Int'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Account: Typegen.NexusPrismaFields<'Account'>
  AccountCategory: Typegen.NexusPrismaFields<'AccountCategory'>
  AccountClient: Typegen.NexusPrismaFields<'AccountClient'>
  Permission: Typegen.NexusPrismaFields<'Permission'>
  Client: Typegen.NexusPrismaFields<'Client'>
  Category: Typegen.NexusPrismaFields<'Category'>
  Tx: Typegen.NexusPrismaFields<'Tx'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  