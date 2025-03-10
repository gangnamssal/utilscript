---
sidebar_position: 1
---

# Chunk

`Chunk`는 주어진 튜플(A)과 청크 크기(Split)를 받아, 튜플을 지정된 크기의 하위 튜플(청크)로 분할한 결과를 반환하는 TypeScript 유틸리티 타입입니다.

## 사용 예시

```ts
import { A } from 'utilscript';

type T = A.Chunk<[1, 2, 3], 1>; // [[1], [2], [3]]

type T2 = A.Chunk<[1, 2, 3], 2>; // [[1, 2], [3]]

type T3 = A.Chunk<[], 1>; // []
```

## 주의 사항

:::warning  
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 빈 배열(`[]`)을 반환합니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Chunk<typeof arr, 2>; // []
```
