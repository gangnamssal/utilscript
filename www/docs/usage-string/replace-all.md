---
sidebar_position: 14
---

# ReplaceAll

`ReplaceAll`은 문자열에서 특정 부분 문자열의 모든 발생을 다른 문자열로 교체하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열 내에서 특정 패턴의 모든 발생을 다른 패턴으로 교체해야 할 때 유용합니다.
:::

## 사용 예시

:::info
`ReplaceAll`은 문자열 내의 모든 일치하는 부분 문자열을 교체합니다. 빈 문자열(`''`)을 `From` 인자로 전달하면 원본 문자열이 그대로 반환됩니다.
:::

```ts
import { S } from 'utilscript';

type T = S.ReplaceAll<'foobar', 'bar', 'foo'>; // 'foofoo'

type T2 = S.ReplaceAll<'t y p e s', ' ', ''>; // 'types'

type T3 = S.ReplaceAll<'foobarfoobar', 'ob', 'b'>; // 'fobarfobar'
```

## 지원 버전

`ReplaceAll` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
