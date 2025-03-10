---
sidebar_position: 11
---

# Last

`Last`는 튜플의 마지막 요소를 반환하는 TypeScript 유틸리티 타입입니다. 빈 튜플이 입력되면 `never`를 반환합니다.

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Last<[]>; // never
type T2 = A.Last<[3, 2, 1]>; // 1
```

## 주의 사항

:::warning  
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Last<typeof arr>; // never
```
