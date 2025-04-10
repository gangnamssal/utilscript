---
sidebar_position: 15
---

# IsUndefined

`IsUndefined`는 타입이 undefined인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 undefined이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsUndefined<undefined>; // true

type T2 = C.IsUndefined<null>; // false
```

## 지원 버전

`IsUndefined` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.17+ | ✅        |
