
### Apps and Packages

- `admin`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `api`: a [Express.js](https://expressjs.com/) app
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
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```
