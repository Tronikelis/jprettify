<h1 align="center">jPrettify</h1>

<div align="center">

<img src="https://img.shields.io/badge/coverage-100%25-success?style=flat-square" />
<img src="https://img.shields.io/bundlephobia/minzip/jprettify?style=flat-square" />
<img src="https://img.shields.io/npm/v/jprettify?style=flat-square" />
<img src="https://img.shields.io/badge/dependencies-0-success?style=flat-square" />
 
</div>

<br />

A 0.5kb library to pretty print json objects for users

## Nice things

-   0.5kb
-   0 dependencies

## The gist of it

```typescript
const jPrettify = require("jprettify").default;
import jPrettify from "jprettify";

const result = jPrettify({
    a: {
        b: "c",
        d: [1, 2],
    },
});

console.log(result);
// a:
//   b:
//     - c
//   d:
//     - 1
//     - 2
```

## API

```typescript
export default function jPrettify(input: Input, spaces = 2): string;
// spaces: the amount of whitespace to add to every layer
```
