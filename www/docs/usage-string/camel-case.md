---
sidebar_position: 1
---

# CamelCase

`CamelCase`는 문자열을 카멜 케이스로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
언더스코어(\_)나 하이픈(-)으로 구분된 단어들을 카멜 케이스 형식으로 변환할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.CamelCase<'foo__bar'>; // 'foo_Bar'

type T2 = S.CamelCase<'foo_bar_'>; // 'fooBar_'
```

## 지원 버전

`CamelCase` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
