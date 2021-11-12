## Introduction

utility library that makes your life easier

## Usage

```
import { formatMoney } from "@dp66/dp-utils"

const purse = formatMoney(1000);
// purse will be 1,000.00
```

## Development

Project use rollup to build and uploaded to npm registry

Support both cjs and esm format running both in browser and node

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
