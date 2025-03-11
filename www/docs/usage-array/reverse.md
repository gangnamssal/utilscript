---
sidebar_position: 16
---

# Reverse

`Reverse`는 튜플을 반대로 뒤집어 새로운 튜플을 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플의 요소 순서를 반대로 뒤집어야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Reverse<['a', 'b']>; // ['b', 'a']
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3];
type T = A.Reverse<typeof arr>; // number[]
```
