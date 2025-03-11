---
sidebar_position: 15
---

# Push

`Push`는 튜플의 끝에 요소를 추가하고 새로운 튜플을 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플의 끝에 새로운 요소를 추가해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Push<[], 1>; // [1]

type T2 = A.Push<['1', 2, '3'], boolean>; // ['1', 2, '3', boolean]
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3];
type T = A.Push<typeof arr, 4>; // [...number[], 4]
```
