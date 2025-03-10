---
sidebar_position: 2
---

# Concat

`Concat`은 두 개의 튜플(T, U)을 받아 하나의 튜플로 연결하는 TypeScript 유틸리티 타입입니다.

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Concat<[], []>; // []

type T2 = A.Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
```

## 주의 사항

:::warning  
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
