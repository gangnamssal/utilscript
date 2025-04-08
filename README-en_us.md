## utilscript

[한국어](./README.md) | English

`utilscript` is a collection of TypeScript utility types that simplifies complex type manipulations. It supports type transformations, conditional types, array/object manipulations, and more, enhancing type safety and productivity.

## Try it

[TypeScript Playground](https://www.typescriptlang.org/play/?#code/PQKhCgAIUweDcSP3IHUCmAbAxgewLYsgC5aQCuBAlmgM4YBO5ADgZAApoCGAngOa1YkA7ACYBCSIF4NwAF7UGDMgAVABbkqkFZHaQqDdhnxFIKAB4MU9PAOYB3cgUWQABmUo16TBwBpIczQyxWzADMSNFIKNFtOSAiAI1p2WijArFoFTlMAZTpGAjFxQHJdwApyOTkAMRR0SEDaCsJiYwY0FPx2YUIUKmYANwTyflVnCIIo4dMqADo5AAl2BgYo7CFyAW48wGA9mWBwcHIcP1pmAG9IAEEvAGEvUq8AeS8WLwyvAFVIAF8qvhxIAHJB1xyPwA3NtsAJOhpaKkALyQADaAEYvAAmLwAZi8ABYvABWAC6GlUYM6IPAo3wpUoBDMQhOUMgsJO40paGptAAPOSsIFIbQUQA+IFAA)

## Install

Use one of the following commands in your terminal to install.

### With npm

```script
npm install utilscript --save-dev
```

### With yarn

```script
yarn add utilscript --save-dev
```

### With pnpm

```script
pnpm add utilscript -D
```

### With bun

```script
bun install utilscript -dev
```

## Getting started

`utilscript` consists of the following modules:

- `A`: Array-related utility types
- `C`: Commonness utility types (conditional types, type checking, etc.)
- `F`: Function-related utility types
- `O`: Object-related utility types
- `P`: Primitive type-related utility types
- `S`: String-related utility types
- `U`: Union-related utility types

Each module provides utility functions for specific type categories. Check out the examples below to see how to use them:

```ts
import { A, C } from 'utilscript';

type IndexType = A.ToIndex<['a', 'b', 'c']>;
// [0, 1, 2]

type IsTupleType = C.IsTuple<IndexType>;
// true
```

```ts
import { O } from 'utilscript';

type PickByRequiredType = O.PickByRequired<{ a: number; b?: string; c: boolean }>;
// { a: number; c: boolean; }
```

```ts
import { S, U } from 'utilscript';

type UrlParamsType = S.ParseUrlParams<'posts/:id/:user'>;
// "id" | "user"

type ToTupleType = U.ToTuple<IsStringType>;
// ["id", "user"]
```

## License

This project is provided under the MIT license. For more details, please refer to the [LICENSE](./LICENSE) file.
