# Nextjs, Prisma, Nexus, Apollo, Postgres, TypeScript stack

This repo shows how to implement a **fullstack app in TypeScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), Graphql and [Apollo Client](https://www.apollographql.com/docs/react) (frontend), [Next.js API routes](https://nextjs.org/docs/api-routes/introduction), [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It also demonstrates how to implement authentication. The repo uses a Postgres database that can be created locally using [`docker-compose`](./docker-compose.yaml).

Note that the graphql endpoint can be fount at [`/pages/api/graphql/`](./pages/api/graphql/), and it has a playground enabled by default in development at the same endpoint.

## How to use

### 1. Download example & install dependencies

Install yarn dependencies:

```
yarn
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 2. Create & run Postgres database using docker

Run docker-compose to create

```
docker-compose up -d
```

### 3. Start the app

```
yarn dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.
