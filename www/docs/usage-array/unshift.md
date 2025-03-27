---
sidebar_position: 25
---

# Unshift

`Unshift`는 튜플의 시작에 요소를 추가하는 TypeScript 유틸리티 타입입니다. 이 타입은 주어진 값을 튜플의 맨 앞에 추가하여 새로운 튜플을 생성합니다.

:::tip
튜플의 시작 부분에 새로운 요소를 추가하여 배열을 확장하고 싶을 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Unshift<[], 1>; // [1]

type T2 = A.Unshift<[1, 2], 0>; // [0, 1, 2]
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3];
type T = A.Unshift<typeof arr, 0>; // [0, ...number[]]
```

## 지원 버전

`Unshift` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
