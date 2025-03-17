---
sidebar_position: 4
---

# Filter

`Filter`는 튜플(T)과 필터링할 타입(F)을 받아 해당 타입에 해당하는 요소만 포함하는 새 튜플을 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플에서 특정 타입의 요소만 필터링하여 추출해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Filter<[0, 1, 2], 2>; // [2]

type T2 = A.Filter<[0, 1, 2], 0 | 1>; // [0, 1]

type T3 = A.Filter<[0, 1, 2], Falsy>; // [0]
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과(빈 배열 `[]`)가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Filter<typeof arr, 1>; // []
```

## 지원 버전

`Filter` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
