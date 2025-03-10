---
sidebar_position: 5
---

# First

`First`는 튜플(T)을 받아 튜플의 첫 번째 요소를 반환하는 TypeScript 유틸리티 타입입니다. 튜플이 비어있는 경우 `never`를 반환합니다.

## 사용법

```ts
import { A } from 'utilscript';

type T = A.First<[3, 2, 1]>; // 3

type T2 = A.First<[() => 123, { a: string }]>; // () => 123

type T3 = A.First<[]>; // never
```

## 주의 사항

:::warning  
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 배열의 첫 번째 요소 타입이 반환됩니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.First<typeof arr>; // number

const arr2 = ['1', '2', '3', '4', '5'];
type T2 = A.First<typeof arr2>; // string
```
