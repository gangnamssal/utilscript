---
sidebar_position: 17
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

## 지원 버전

`Push` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::info
0.0.13 버전부터 readonly 튜플에 대한 처리가 개선되었습니다. 이제 입력 튜플의 readonly 속성이 결과 튜플에도 유지됩니다.
:::
