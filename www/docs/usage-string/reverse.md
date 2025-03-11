---
sidebar_position: 15
---

# Reversed

`Reversed`는 문자열을 받아 문자열의 문자를 역순으로 배열한 새로운 문자열을 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열을 뒤집어야 할 때 유용합니다. 예를 들어, 팰린드롬(앞뒤로 읽어도 같은 단어) 확인이나 특정 문자열 처리 작업에 활용할 수 있습니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Reversed<'hello'>; // 'olleh'

type T2 = S.Reversed<'world'>; // 'dlrow'
```
