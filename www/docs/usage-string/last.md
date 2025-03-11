---
sidebar_position: 9
---

# Last

`Last`는 문자열의 마지막 문자를 가져오는 TypeScript 유틸리티 타입입니다.

:::tip
문자열에서 마지막 글자를 추출할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Last<'hello'>; // 'o'

type T2 = S.Last<'world'>; // 'd'

type T3 = S.Last<'typescript'>; // 't'
```
