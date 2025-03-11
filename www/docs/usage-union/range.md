---
sidebar_position: 1
---

# Range

`Range`는 주어진 범위의 숫자 유니온을 생성하는 TypeScript 유틸리티 타입입니다.

:::tip
특정 범위 내의 모든 숫자를 유니온 타입으로 만들 때 유용합니다.
:::

## 사용 예시

```ts
import { U } from 'utilscript';

type T = U.Range<2, 9>; // 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
```
