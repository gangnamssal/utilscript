---
sidebar_position: 9
---

# IsUnion

`IsUnion`은 타입이 유니온인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 유니온이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
유니온 타입은 여러 타입 중 하나가 될 수 있는 타입을 의미합니다. 예를 들어 `string | number`는 문자열이나 숫자가 될 수 있는 유니온 타입입니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsUnion<string>; // false

type T2 = C.IsUnion<string | number>; // true

type T3 = C.IsUnion<[string | number]>; // false

type T4 = C.IsUnion<string | never>; // false
```

## 지원 버전

`IsUnion` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
