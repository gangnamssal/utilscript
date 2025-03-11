---
sidebar_position: 1
---

# AnyArray

`AnyArray`는 모든 배열 타입(Array 또는 Tuple)을 나타내는 TypeScript 유틸리티 타입입니다.

:::tip
배열이나 튜플 타입을 모두 포함하는 타입이 필요할 때 유용합니다.
:::

:::info
제네릭 타입 매개변수 `T`를 통해 배열 요소의 타입을 지정할 수 있습니다.
:::

## 사용 예시

```ts
import { P } from 'utilscript';

type T = P.AnyArray<string>; // string[] | readonly string[]
```
