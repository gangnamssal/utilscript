---
sidebar_position: 25
---

# Without

`Without`는 튜플에서 특정 값 또는 값들을 제거하는 TypeScript 유틸리티 타입입니다. 이 타입은 주어진 튜플에서 지정된 값 또는 값 튜플을 제거하여 새로운 튜플을 생성합니다.

:::tip
튜플에서 특정 값을 제거하여 새로운 튜플을 생성할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Without<[1, 2], 1>; // [2]

type T2 = A.Without<[1, 2, 4, 1, 5], [1, 2]>; // [4, 5]

type T3 = A.Without<[1, never, null, undefined], Falsy>; // [1]
```

:::info
중복된 값이 있는 경우 모두 제거됩니다.
:::

:::info
Without의 두 번째 인자에 `튜플로 값을 전달`하면 여러 개의 값을 한 번에 제외할 수 있습니다.
:::

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Without<typeof arr, 1>; // []
```

## 지원 버전

`Without` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
