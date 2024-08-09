### Apps and Packages

- `admin`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `api`: a [nest.js](https://nestjs.com/) with [prisma](https://prisma.io) app connected to a PostgreSQL database run
  in [supabase](https://supabase.io)
- `ui`: a [shadcn/ui](https://ui.shadcn.com/) components shared by both `web` and `admin` applications

## Adding shadcn component

Run the following command:

```sh
npm run ui:add accordion --workspace=ui
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```
