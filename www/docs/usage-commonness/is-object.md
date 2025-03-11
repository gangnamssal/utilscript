---
sidebar_position: 7
---

# IsObject

`IsObject`는 타입이 객체인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 객체이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다. 함수와 배열은 객체로 간주하지 않습니다.

:::tip  
`객체` 타입을 정확히 식별하여 타입 안전성을 높이거나, 제네릭 타입에서 `객체` 타입을 특별하게 처리해야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsObject<{}>; // true

type T2 = C.IsObject<object>; // true

type T3 = C.IsObject<{ a: 1 }>; // true

type T4 = C.IsObject<Record<string, unknown>>; // true

type T5 = C.IsObject<[]>; // false

type T6 = C.IsObject<unknown>; // false
```
