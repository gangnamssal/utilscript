---
sidebar_position: 22
---

# Sort

`Sort`는 숫자 튜플을 오름차순 또는 내림차순으로 정렬하는 TypeScript 유틸리티 타입입니다.

:::tip
숫자로 구성된 튜플을 타입 레벨에서 정렬할 때 유용합니다. 기본적으로 오름차순으로 정렬하며, 두 번째 매개변수를 통해 내림차순 정렬도 가능합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Sort<[2, 1]>; // [1, 2]

type T2 = A.Sort<[3, 2, 0, 1, 0, 0, 0]>; // [0, 0, 0, 0, 1, 2, 3]

type T3 = A.Sort<[1, 2, 3], true>; // [3, 2, 1]
```

## 지원 버전

`Sort` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.18+ | ✅        |
| 0.0.16+ | ✅        |

:::note
**0.0.18 버전**부터 내부 로직의 성능이 개선되어 더 빠른 타입 계산이 가능해졌습니다.
:::
