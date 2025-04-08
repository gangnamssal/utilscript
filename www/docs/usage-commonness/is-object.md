---
sidebar_position: 8
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

## 지원 버전

`IsObject` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::note
**0.0.13 버전**부터는 다양한 엣지케이스에 대한 예외처리가 추가되었습니다. 이전 버전에서 발생할 수 있었던 타입 판별 관련 문제들이 해결되었으며, 더 안정적이고 정확한 결과를 제공합니다.
:::
