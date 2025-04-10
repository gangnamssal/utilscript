---
sidebar_position: 11
---

# Join

`Join`은 문자열 또는 숫자 튜플(T)과 구분자(U)를 받아 튜플 요소를 구분자로 결합한 문자열을 반환하는 TypeScript 유틸리티 타입입니다. 구분자를 지정하지 않으면 `기본값으로 쉼표(,)`가 사용됩니다.

:::tip
문자열이나 숫자 배열을 하나의 문자열로 결합해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Join<['a', 'p', 'p', 'l', 'e'], '-'>; // 'a-p-p-l-e'

type T2 = A.Join<['Hello', 'World'], ' '>; // 'Hello World'

type T3 = A.Join<['1', '1', '1']>; // '1,1,1'
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Join<typeof arr>; // ""
```

## 지원 버전

`Join` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.18+ | ✅        |
| 0.0.8+  | ✅        |

:::note
**0.0.18 버전**부터 내부 로직의 성능이 개선되어 더 빠른 타입 계산이 가능해졌습니다.
:::
