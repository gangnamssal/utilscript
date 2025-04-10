---
sidebar_position: 9
---

# IsNull

`IsNull`은 타입이 `null`인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 `null`이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
`null` 타입을 감지하여 타입 안전성을 높이거나, 제네릭 타입에서 `null`을 특별하게 처리해야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsNull<null>; // true

type T2 = C.IsNull<number>; // false
```

## 지원 버전

`IsNull` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.17+ | ✅        |
