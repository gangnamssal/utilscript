---
sidebar_position: 9
---

# IndexOf

`IndexOf`는 튜플과 값을 받아 튜플에서 값의 인덱스를 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플 내에서 특정 값의 위치(인덱스)를 찾아야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.IndexOf<[1, 2, 3], 2>; // 1

type T2 = A.IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // 2

type T3 = A.IndexOf<[0, 0, 0], 2>; // -1
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.IndexOf<typeof arr, number>; // -1
type T2 = A.IndexOf<typeof arr, 3>; // -1
```

## 지원 버전

`IndexOf` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.18+ | ✅        |
| 0.0.8+  | ✅        |

:::note
**0.0.18 버전**부터 내부 로직의 성능이 개선되어 더 빠른 타입 계산이 가능해졌습니다.
:::
