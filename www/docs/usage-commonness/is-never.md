---
sidebar_position: 6
---

# IsNever

`IsNever`는 타입이 `never`인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 `never`이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
`never` 타입을 감지하여 타입 안전성을 높이거나, 제네릭 타입에서 `never`를 특별하게 처리해야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsNever<never>; // true

type T2 = C.IsNever<never | string>; // false

type T3 = C.IsNever<undefined>; // false
```
