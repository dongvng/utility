[![CI](https://github.com/dongvng/utility/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/dongvng/utility/actions/workflows/ci.yml)

## Introduction

utility library that makes your life easier

## Installation

```
npm install @dp66/dp-utils
```

or

```
yarn add @dp66/dp-utils
```
## Features

- Support cjs, esm, umd module format running both in browser and node

## Usage

```
import { formatMoney } from "@dp66/dp-utils"

const purse = formatMoney(1000);
// purse will be 1,000.00
```

## Built with

- Typescript
- Rollup


## Development

### Flow of making changes

make changes and do the following

1. Follow question from changeset to answer

```
npx changeset
```

2. Bump version and having changelog

```
npx changeset version
```

3. Commit your changes

4.

```
npx changeset publish
```

5.  push tags to remote

```
git push --tags
```

