# @cspark/ts-starter

## Description

The Coherent Spark TypeScript starter repository.

## Features

- Define base template for TypeScript projects
- Add linting and formatting with `ESLint` and `Prettier`
- Add testing with `Jest`
- Add GitHub Actions for CI/CD

## Usage

### Installation

```bash
yarn install
```

### Tooling

```bash
# format code
yarn run format

# lint code
yarn run lint

# test code
yarn run test

# build code
yarn run build
```

## Setup

### Code Quality

This project uses [Husky](https://github.com/typicode/husky) to manage Git hooks
and help enforce code quality.

### Rollup

This project uses [Rollup](https://rollupjs.org/guide/en/) to bundle the code
for distribution. Located in `rollup.config.js`, the configuration is set to
output a CommonJS module and an ES module.

### Unit Testing

This project uses [Jest](https://jestjs.io/) for unit testing. The `jest` setup
is located in the `jest` field of `package.json`. It only targets `*.spec.ts` files.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## License

[MIT](./LICENSE)
