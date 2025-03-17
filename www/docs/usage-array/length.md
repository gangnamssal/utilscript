---
sidebar_position: 13
---

# Length

`Length`는 튜플을 받아 해당 튜플의 길이를 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
튜플의 길이를 타입 레벨에서 계산해야 할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Length<[1, 2, 3]>; // 3
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 2, 3, 4, 5];
type T = A.Length<typeof arr>; // number
```

## 지원 버전

`Length` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
