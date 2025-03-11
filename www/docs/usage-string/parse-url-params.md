---
sidebar_position: 12
---

# ParseUrlParams

`ParseUrlParams`는 URL 경로 문자열에서 파라미터를 추출하는 TypeScript 유틸리티 타입입니다.

:::tip
URL 라우팅 시스템에서 동적 파라미터를 타입 레벨에서 추출할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.ParseUrlParams<''>; // never

type T2 = S.ParseUrlParams<':id'>; // 'id'

type T3 = S.ParseUrlParams<'posts/:id/'>; // 'id'

type T4 = S.ParseUrlParams<'posts/:id/:user'>; // 'id' | 'user'
```
