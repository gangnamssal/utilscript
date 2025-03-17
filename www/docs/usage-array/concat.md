---
sidebar_position: 2
---

# Concat

`Concat`은 두 개의 튜플(T, U)을 받아 하나의 튜플로 연결하는 TypeScript 유틸리티 타입입니다.

:::tip
두 개의 튜플을 하나로 합쳐야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Concat<[], []>; // []

type T2 = A.Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 두 배열의 요소 타입을 결합한 배열 타입을 반환합니다.
:::

```ts
import { A } from 'utilscript';

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
type T = A.Concat<typeof arr1, typeof arr2>; // number[]

const arr3 = ['a', 'b', 'c'];
type T2 = A.Concat<typeof arr1, typeof arr3>; // (number | string)[]
```

## 지원 버전

`Concat` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
