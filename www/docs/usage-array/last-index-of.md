---
sidebar_position: 12
---

# LastIndexOf

`LastIndexOf`는 튜플과 값을 받아 튜플에서 해당 값의 마지막 인덱스를 반환하는 TypeScript 유틸리티 타입입니다. 값이 배열에 존재하지 않으면 `-1`을 반환합니다.

:::tip
튜플 내에서 특정 값의 마지막 출현 위치(인덱스)를 찾아야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3

type T2 = A.LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // 7

type T3 = A.LastIndexOf<[0, 0, 0], 2>; // -1
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.LastIndexOf<typeof arr, 2>; // -1
```
