---
sidebar_position: 17
---

# Min

`Min`은 숫자 튜플에서 최소값을 찾는 TypeScript 유틸리티 타입입니다.

:::tip
숫자로 구성된 튜플에서 가장 작은 값을 타입 레벨에서 계산할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Min<[1, 2, 3]>; // 1

type T2 = A.Min<[3, 2, 0, 1, 0, 0, 0]>; // 0

type T3 = A.Min<[-1, -2, -3]>; // -3
```

## 지원 버전

`Min` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.18+ | ✅        |
| 0.0.16+ | ✅        |

:::note
**0.0.18 버전**부터 내부 로직의 성능이 개선되어 더 빠른 타입 계산이 가능해졌습니다.
:::
