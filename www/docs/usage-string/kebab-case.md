---
sidebar_position: 8
---

# KebabCase

`KebabCase`는 문자열을 케밥 케이스로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
카멜 케이스나 파스칼 케이스로 작성된 문자열을 하이픈으로 구분된 소문자 형태로 변환할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.KebabCase<'FooBarBaz'>; // 'foo-bar-baz'

type T2 = S.KebabCase<'fooBarBaz'>; // 'foo-bar-baz'

type T3 = S.KebabCase<'Foo-Bar'>; // 'foo--bar'
```

## 지원 버전

`KebabCase` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.18+ | ✅        |
| 0.0.8+  | ✅        |

:::note
**0.0.18 버전**부터 내부 로직의 성능이 개선되어 더 빠른 타입 계산이 가능해졌습니다.
:::
