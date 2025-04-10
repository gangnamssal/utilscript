---
sidebar_position: 12
---

# IsPureNumber

`IsPureNumber`는 타입이 순수한 number인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 순수한 number이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
`순수한 number`란 유니온 타입이 아닌 단일 number 타입을 의미합니다. 이 유틸리티는 타입 안전성을 높이거나, 제네릭 타입에서 number 타입을 특별하게 처리해야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsPureNumber<number>; // true

type T2 = C.IsPureNumber<bigint | number>; // false

type T3 = C.IsPureNumber<123>; // false
```

## 지원 버전

`IsPureNumber` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
