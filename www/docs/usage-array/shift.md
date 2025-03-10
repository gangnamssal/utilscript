---
sidebar_position: 17
---

# Shift

`Shift`는 튜플의 첫 번째 요소를 제거하고 새로운 튜플을 반환하는 TypeScript 유틸리티 타입입니다.

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Shift<[1]>; // []

type T2 = A.Shift<[3, 2, 1]>; // [2, 1]
```

## 주의 사항

:::warning  
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3];
type T = A.Shift<typeof arr>; // []
```
