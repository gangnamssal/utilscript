---
sidebar_position: 8
---

# Includes

`Includes`는 튜플에 특정 값이 포함되어 있는지 확인하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플 내에 특정 값이 존재하는지 확인해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // true

type T2 = A.Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>,; // false

type T3 = A.Includes<[1, 2, 3, 5, 6, 7], 7>; // true
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Includes<typeof arr, 5>; // false
type T2 = A.Includes<typeof arr, number>; // true
```

## 지원 버전

`Includes` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::info
0.0.13 버전부터 입력 타입이 Tuple 타입으로 제한되었습니다. 이전 버전에서는 입력 타입에 대한 제한이 없어 예상치 못한 결과가 발생할 수 있었습니다.
:::
