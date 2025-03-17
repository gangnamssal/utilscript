---
sidebar_position: 2
---

# ToFnIntersection

`ToFnIntersection`은 유니온 타입을 함수 교차 타입으로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
유니온 타입의 각 멤버를 해당 값을 반환하는 함수로 변환하고, 이 함수들의 교차 타입을 생성할 때 유용합니다.
:::

## 사용 예시

```ts
import { U } from 'utilscript';

type T = U.ToFnIntersection<'foo' | 42 | true>; //  (() => 'foo') & (() => 42) & (() => true)>>
```

## 지원 버전

`ToFnIntersection` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
