---
sidebar_position: 15
---

# MatchReadonly

`MatchReadonly`는 하나의 튜플의 readonly 상태를 다른 튜플에 적용하는 TypeScript 유틸리티 타입입니다.

:::tip
소스 튜플이 readonly인지 확인하고 그 상태를 대상 튜플에 적용할 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.MatchReadonly<[1, 2, 3], [4, 5, 6]>; // [4, 5, 6]

type T2 = A.MatchReadonly<readonly [1, 2, 3], [4, 5, 6]>; // readonly [4, 5, 6]
```

## 지원 버전

`MatchReadonly` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
