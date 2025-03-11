---
sidebar_position: 3
---

# ToIntersection

`ToIntersection`은 유니온 타입을 교차 타입으로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
유니온 타입을 교차 타입으로 변환할 때 유용합니다. 예를 들어, `'a' | 'b'`를 `'a' & 'b'`로 변환할 수 있습니다.
:::

## 사용 예시

```ts
import { U } from 'utilscript';

type T = U.ToIntersection<'a' | 'b'>; // 'a' & 'b'
```
