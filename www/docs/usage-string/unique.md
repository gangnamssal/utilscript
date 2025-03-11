---
sidebar_position: 25
---

# Unique

`Unique`는 문자열에서 중복된 문자를 제거하고 유니크한 문자만 남기는 TypeScript 유틸리티 타입입니다.

:::tip
문자열에서 중복된 문자를 제거하고 고유한 문자만 유지하고 싶을 때 유용합니다. 예를 들어, 'aabbcc'를 'abc'로 변환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Unique<'aabbcc'>; // 'abc'

type T2 = S.Unique<'aabbbccddeeff'>; // 'abcdef'
```
