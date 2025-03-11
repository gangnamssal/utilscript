---
sidebar_position: 25
---

# Zip

`Zip`은 두 개의 튜플을 받아 각 인덱스의 요소를 튜플로 묶어 새로운 튜플을 반환하는 TypeScript 유틸리티 타입입니다. 이 타입은 두 튜플의 요소를 순서대로 짝지어 튜플 튜플을 생성합니다. 만약 두 튜플의 길이가 다르다면, 더 짧은 튜플의 길이에 맞춰 결과가 생성됩니다.

:::tip
두 개의 서로 다른 튜플을 병렬적으로 결합하여 각 인덱스의 요소를 쌍으로 만들 때 유용합니다.
:::

:::tip
데이터 구조를 변환하거나 두 데이터 세트를 연관시킬 때 활용할 수 있습니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Zip<[], []>; // []

type T2 = A.Zip<[1, 2], [true, false]>; // [[1, true], [2, false]]

type T3 = A.Zip<[[1, 2]], [3]>; // [[[1, 2], 3]]

type T4 = A.Zip<[], [1, 2, 3]>; // []
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const a = [1, 2, 3];
const b = ['a', 'b', 'c'];

type T = A.Zip<typeof a, typeof b>; // []
```
