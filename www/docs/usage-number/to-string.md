---
sidebar_position: 2
---

# ToString

`ToString`은 숫자를 문자열로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
숫자 값을 문자열 형태로 사용해야 할 때 유용합니다.
:::

## 사용 예시

```ts
import { N } from 'utilscript';

type T = N.ToString<123>; // '123'

type T2 = N.ToString<-123>; // '-123'
```

## 지원 버전

`ToString` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
