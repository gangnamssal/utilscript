---
sidebar_position: 12
---

# LookUp

`LookUp`은 특정 키의 값과 일치하는 타입을 추출하는 TypeScript 유틸리티 타입입니다. 이 타입은 유니온 타입에서 특정 조건에 맞는 타입만 선택적으로 추출할 수 있게 해줍니다.

:::tip
이 유틸리티 타입은 여러 인터페이스나 타입이 유니온으로 결합된 경우, 특정 속성의 값을 기준으로 원하는 타입만 필터링할 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Animal = Cat | Dog;

type T = O.LookUp<Animal, 'type', 'dog'>; // Dog

type T2 = O.LookUp<Animal, 'breeds', 'Curl'>; // Cat
```

## 지원 버전

`LookUp` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
