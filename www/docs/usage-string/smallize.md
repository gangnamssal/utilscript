---
sidebar_position: 16
---

# Smallize

`Smallize`는 문자열의 첫 번째 문자를 소문자로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 첫 글자를 소문자로 변환해야 할 때 유용합니다. 예를 들어, 카멜 케이스(camelCase) 변환이나 일관된 텍스트 스타일링에 활용할 수 있습니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Smallize<'FOOBAR'>; // fOOBAR

type T2 = S.Smallize<'FooBar'>; // 'fooBar'
```

## 지원 버전

`Smallize` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
