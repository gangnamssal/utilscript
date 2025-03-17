---
sidebar_position: 17
---

# SnakeCase

`SnakeCase`는 문자열을 스네이크 케이스(snake_case)로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
카멜 케이스(camelCase)나 파스칼 케이스(PascalCase)로 작성된 문자열을 스네이크 케이스로 변환할 때 유용합니다. 스네이크 케이스는 단어 사이를 언더스코어(\_)로 구분하는 명명 규칙입니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.SnakeCase<'userName'>; // 'user_name'

type T2 = S.SnakeCase<'getElementById'>; // 'get_element_by_id'

type T3 = S.SnakeCase<'getElementById' | 'getElementByClassNames'>; // 'get_element_by_id' | 'get_element_by_class_names'
```

## 지원 버전

`SnakeCase` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
