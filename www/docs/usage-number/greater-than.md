---
sidebar_position: 1
---

# GreaterThan

`GreaterThan`은 첫 번째 숫자가 두 번째 숫자보다 큰지 확인하는 TypeScript 유틸리티 타입입니다.

:::tip
두 숫자를 비교하여 크기 관계를 확인할 때 유용합니다.
:::

## 사용 예시

```ts
import { N } from 'utilscript';

type T = N.GreaterThan<1, 0>; // true

type T2 = N.GreaterThan<-2, -1>; // false
```

## 지원 버전

`GreaterThan` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
