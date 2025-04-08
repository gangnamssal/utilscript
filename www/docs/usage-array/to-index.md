---
sidebar_position: 26
---

# ToIndex

`ToIndex`는 튜플을 인덱스 튜플로 변환하는 TypeScript 유틸리티 타입입니다. 이 타입은 튜플의 각 요소를 해당 인덱스 값으로 변환합니다.

:::tip
튜플의 각 요소를 해당 인덱스로 변환하여 인덱스 기반 작업을 수행할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.ToIndex<[1, 2, 3]>; // [0, 1, 2]

type T2 = A.ToIndex<[1, 'a', 'b', 'c']>; // [0, 1, 2, 3]
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = ['a', 'b', 'c'];
type T = A.ToIndex<typeof arr>; // never[]
```

## 지원 버전

`ToIndex` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
