---
sidebar_position: 5
---

# ToTuple

`ToTuple`은 유니온 타입을 튜플로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
유니온 타입을 튜플로 변환할 때 유용합니다. 예를 들어, `'a' | 'b' | 'c'`를 `['a', 'b', 'c']`와 같은 튜플 타입으로 변환할 수 있습니다.
:::

## 사용 예시

```ts
import { U } from 'utilscript';

type T = U.ToTuple<'a' | 'b'>['length']; // 2

type T2 = U.ToTuple<'a' | 'b'>; // ['a', 'b']
```
