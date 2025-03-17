---
sidebar_position: 5
---

# IsAny

`IsAny`는 타입이 `any`인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 `any`이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
`any` 타입을 감지하여 타입 안전성을 높이거나, 제네릭 타입에서 `any`를 특별하게 처리해야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsAny<any>; // true

type T2 = C.IsAny<undefined>; // false

type T3 = C.IsAny<unknown>; // false
```

## 지원 버전

`IsAny` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
