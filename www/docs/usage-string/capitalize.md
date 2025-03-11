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
