---
sidebar_position: 1
---

# Reverse

`Reverse`는 불리언 값을 반전시키는 TypeScript 유틸리티 타입입니다.

:::tip
불리언 값을 간단하게 반전시켜야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { B } from 'utilscript';

type T = B.Reverse<true>; // false

type T2 = B.Reverse<false>; // true
```

## 지원 버전

`Reverse` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
