---
sidebar_position: 2
---

# Capitalize

`Capitalize`는 문자열의 첫 글자를 대문자로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 첫 글자만 대문자로 변환하거나, 공백이나 특수문자로 구분된 각 단어의 첫 글자를 대문자로 변환할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.CapitalizeWords<'foobar'>; // 'Foobar'

type T2 = S.CapitalizeWords<'foo bar'>; // 'Foo Bar'
```

## 지원 버전

`Capitalize` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
