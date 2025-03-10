---
sidebar_position: 6
---

# Flatten

`Flatten`은 중첩된 튜플(T)과 평탄화할 깊이(D)를 받아 지정된 깊이만큼 평탄화된 튜플을 반환하는 TypeScript 유틸리티 타입입니다. 기본 깊이는 1입니다.

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Flatten<[1, 2, 3, 4]>; // [1, 2, 3, 4]

type T2 = A.Flatten<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]

type T3 = A.Flatten<[1, [2, [3, [4, [5]]]]], 19260817>; // [1, 2, 3, 4, 5]
```

## 주의 사항

:::warning  
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, [5]];
type T = A.Flatten<typeof arr>; // (number | number[])[]
```
