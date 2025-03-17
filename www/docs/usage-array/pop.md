---
sidebar_position: 14
---

# Pop

`Pop`은 튜플의 마지막 요소를 제거하고 나머지 요소들로 구성된 새로운 튜플을 반환하는 TypeScript 유틸리티 타입입니다. 빈 튜플이 입력되면 빈 튜플을 반환합니다.

:::tip
튜플의 마지막 요소를 제거해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Pop<[3, 2, 1]>; // [3, 2]

type T2 = A.Pop<[]>; // []
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Pop<typeof arr>; // []
```

## 지원 버전

`Pop` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
