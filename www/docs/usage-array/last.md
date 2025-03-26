---
sidebar_position: 12
---

# Last

`Last`는 튜플의 마지막 요소를 반환하는 TypeScript 유틸리티 타입입니다. 빈 튜플이 입력되면 `never`를 반환합니다.

:::tip
튜플의 마지막 요소를 빠르게 추출해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Last<[]>; // never
type T2 = A.Last<[3, 2, 1]>; // 1
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Last<typeof arr>; // never
```

## 지원 버전

`Last` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
