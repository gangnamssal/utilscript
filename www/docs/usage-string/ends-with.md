---
sidebar_position: 4
---

# EndsWith

`EndsWith`는 문자열이 특정 부분 문자열로 끝나는지 확인하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열이 특정 패턴으로 끝나는지 확인할 때 유용합니다. 원본 문자열이 지정된 부분 문자열로 끝나면 `true`를, 그렇지 않으면 `false`를 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.EndsWith<'abc', 'bc'>; // true

type T2 = S.EndsWith<'abc', 'abc'>; // true

type T3 = S.EndsWith<'abc', 'd'>; // false
```

## 지원 버전

`EndsWith` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
