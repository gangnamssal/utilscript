---
sidebar_position: 17
---

# IsUnknown

`IsUnknown`은 타입이 unknown인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 unknown이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
`unknown` 타입은 TypeScript에서 모든 타입을 할당할 수 있지만, 사용하기 전에 타입 검사가 필요한 안전한 타입입니다. `any`와 달리 타입 검사 없이 직접 사용할 수 없습니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsUnknown<unknown>; // true

type T2 = C.IsUnknown<any>; // false

type T3 = C.IsUnknown<string>; // false
```

## 지원 버전

`IsUnknown` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
