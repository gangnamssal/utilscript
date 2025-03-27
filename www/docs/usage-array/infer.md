---
sidebar_position: 10
---

# Infer

`Infer`는 튜플의 모든 요소의 유니온 타입을 추론하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플에 포함된 모든 요소의 타입을 하나의 유니온 타입으로 추출해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

const number = [1, 2, 3];

type T = A.Infer<[1, 2, 3]>; // 1 | 2 | 3

type T2 = A.Infer<['a', 'b', 'c']>; // 'a' | 'b' | 'c'

type T3 = A.Infer<typeof number>; // number

type T4 = A.Infer<[]>; // never
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다. `Infer` 타입은 정확한 튜플 타입에서만 올바르게 작동합니다.
:::

```ts
import { A } from 'utilscript';

type T = A.Infer<true>; // type error
type T2 = A.Infer<123>; // type error
```

## 지원 버전

`IndexOf` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.11+ | ❌        |
| 0.0.10+ | ✅        |

:::danger 지원 종료
`Infer` 유틸리티 타입은 0.0.11 버전부터 `commonness/UnBox`로 통합되었습니다. 0.0.11 이상 버전에서는 [`UnBox`](https://www.utilscript.site/docs/usage-commonness/unbox)를 사용하시기 바랍니다.
:::
