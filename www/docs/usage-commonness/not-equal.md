---
sidebar_position: 18
---

# NotEqual

`NotEqual`은 두 타입이 서로 다른지 확인하는 TypeScript 유틸리티 타입입니다. 두 타입이 다르면 `true`를 반환하고, 같으면 `false`를 반환합니다.

:::tip  
타입 비교 시 두 타입이 정확히 같은지 확인하는 `Equal`과 반대로 작동하며, 타입 조건부 로직을 구현할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.NotEqual<1, 2>; // true

type T2 = C.NotEqual<'a', 'b'>; // true
```

## 지원 버전

`NotEqual` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
