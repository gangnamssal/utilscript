---
sidebar_position: 5
---

# IsAlphabet

`IsAlphabet`은 문자열이 알파벳인지 확인하는 TypeScript 유틸리티 타입입니다. 문자열이 알파벳이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
문자열이 알파벳으로만 구성되어 있는지 확인할 때 유용합니다.
:::

:::tip  
특히 입력 유효성 검사나 타입 안전성을 강화하는 데 활용할 수 있습니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsAlphabet<'a'>; // true

type T2 = C.IsAlphabet<'1'>; // false
```

## 지원 버전

`IsAlphabet` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
