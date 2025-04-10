---
sidebar_position: 3
---

# Fill

`Fill`은 튜플(T), 값(N), 시작 인덱스(Start)와 끝 인덱스(End)를 받아 지정된 범위에 지정된 값을 채운 튜플을 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플의 특정 범위에 동일한 값을 채워야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Fill<[], 0>; // []

type T2 = A.Fill<[1, 2, 3], 0>; // [0, 0, 0]

type T3 = A.Fill<[1, 2, 3], true, 0, 1>; // [true, 2, 3]
```

## 주의 사항

:::warning
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 빈 배열(`[]`)을 반환합니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Fill<typeof arr, 0, 0, 3>; // []
```

## 지원 버전

`Fill` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.18+ | ✅        |
| 0.0.8+  | ✅        |

:::note
**0.0.18 버전**부터 내부 로직의 성능이 개선되어 더 빠른 타입 계산이 가능해졌습니다.
:::
