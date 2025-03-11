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
