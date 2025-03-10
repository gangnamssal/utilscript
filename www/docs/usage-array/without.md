---
sidebar_position: 24
---

# Without

`Without`는 튜플에서 특정 값 또는 값들을 제거하는 TypeScript 유틸리티 타입입니다. 이 타입은 주어진 튜플에서 지정된 값 또는 값 튜플을 제거하여 새로운 튜플을 생성합니다.

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Without<[1, 2], 1>; // [2]

type T2 = A.Without<[1, 2, 4, 1, 5], [1, 2]>; // [4, 5]

type T3 = A.Without<[1, never, null, undefined], Falsy>; // [1]
```

:::tip
Without의 두 번째 인자에 `튜플로 값을 전달`하면 여러 개의 값을 한 번에 제외할 수 있습니다.
:::

## 주의 사항

:::warning  
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Without<typeof arr, 1>; // []
```
