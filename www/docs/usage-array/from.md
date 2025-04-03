---
sidebar_position: 7
---

# From

`From`은 주어진 길이(L)를 받아 해당 길이의 튜플을 생성하는 TypeScript 유틸리티 타입입니다.

:::tip
특정 길이의 튜플을 빠르게 생성해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.From<0>; // []

type T2 = A.From<2>; // [unknown, unknown]
```

## 주의 사항

:::caution
TypeScript의 재귀 제한으로 인해 `From`은 최대 999 길이의 배열만 생성할 수 있습니다. 1000 이상의 길이를 지정하면 타입 오류가 발생합니다.
:::

```ts
import { A } from 'utilscript';

// @ts-expect-error: type error
type T = A.From<1000>['length']; // 형식 인스턴스화는 깊이가 매우 깊으며 무한할 수도 있습니다.
```

## 지원 버전

`From` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::info
0.0.13 버전부터 음수나 소수와 같은 엣지 케이스 처리가 개선되었습니다. 이제 음수나 소수가 입력되면 never 타입을 반환합니다. 이전 버전에서는 이러한 특수한 경우에 대한 처리가 미흡했습니다.
:::
