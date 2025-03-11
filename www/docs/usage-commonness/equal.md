---
sidebar_position: 1
---

# Equal

`Equal`은 두 값이 동일한지 확인하는 TypeScript 유틸리티 타입입니다. 두 값이 정확히 같은 타입인지 검사하여 결과를 `true` 또는 `false`로 반환합니다.

:::tip
두 타입이 정확히 동일한지 비교해야 할 때 유용합니다.
:::

:::tip
특히 조건부 타입이나 타입 가드에서 타입 비교 시 활용할 수 있습니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.Equal<1, 1>; // true

type T2 = C.Equal<1, 2>; // false
```
