---
sidebar_position: 3
---

# Branded

`Branded`는 타입에 브랜드를 추가하여 명목적 타입 시스템을 구현하는 TypeScript 타입입니다.

:::tip
구조적으로 동일하지만 의미적으로 다른 타입을 구분할 때 유용합니다. 예를 들어, `string` 타입이지만 이메일 주소만 허용하는 타입을 만들 수 있습니다.
:::

## 사용 예시

```ts
import { P } from 'utilscript';

type EmailBrand = P.Branded<string, 'email'>; // string & { [__brand]: 'email' }
```

## 지원 버전

`Branded` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
