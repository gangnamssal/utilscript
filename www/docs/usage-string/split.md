---
sidebar_position: 18
---

# Split

`Split`은 문자열을 지정된 구분자로 분리하여 문자열 배열로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열을 특정 문자나 문자열을 기준으로 분리할 때 유용합니다. 구분자를 지정하지 않으면 전체 문자열이 하나의 요소로 포함된 배열을 반환하고, 빈 문자열('')을 구분자로 사용하면 문자열을 개별 문자로 분리합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Split<'Hi! How are you?'>; // ['Hi! How are you?']

type T2 = S.Split<'Hi! How are you?', ' '>; // ['Hi!', 'How', 'are', 'you?']
```

## 지원 버전

`Split` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
