---
sidebar_position: 3
---

# Concat

`Concat`은 두 문자열을 연결하는 TypeScript 유틸리티 타입입니다.

:::tip
두 문자열을 하나로 합칠 때 유용합니다. 첫 번째 문자열과 두 번째 문자열을 순서대로 연결합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Concat<'abc', 'def'>; // 'abcdef'

type T2 = S.Concat<'123', '456'>; // '123456'
```

## 지원 버전

`Concat` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
