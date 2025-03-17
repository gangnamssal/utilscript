---
sidebar_position: 13
---

# Replace

`Replace`는 문자열에서 특정 부분 문자열을 다른 문자열로 교체하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열 조작이 필요할 때 특정 패턴을 다른 패턴으로 교체하는 데 유용합니다.
:::

:::info
`Replace`는 첫 번째 일치하는 부분 문자열만 교체합니다. 빈 문자열(`''`)을 `From` 인자로 전달하면 원본 문자열이 그대로 반환됩니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Replace<'foobar', 'bar', 'foo'>; // 'foofoo'

type T2 = S.Replace<'foobarbar', 'bar', 'foo'>; // 'foofoobar'

type T3 = S.Replace<'foobarbar', 'bar', ''>; // 'foobar'
```

## 지원 버전

`Replace` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
