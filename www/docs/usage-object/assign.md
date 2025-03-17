---
sidebar_position: 3
---

# Assign

`Assign`은 배열의 객체에서 속성을 목표 객체에 할당하는 TypeScript 유틸리티 타입입니다. 이 타입은 JavaScript의 `Object.assign()` 메서드와 유사하게 동작하며, 여러 소스 객체의 속성을 대상 객체에 복사합니다.

:::tip
이 유틸리티 타입은 여러 객체의 속성을 하나의 객체로 병합하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type Case1Target = {};

type Case1Origin1 = { a: 'a' };

type Case1Origin2 = { b: 'b' };

type Case1Origin3 = { c: 'c' };

type T = O.Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>,

// { a: 'a'; b: 'b'; c: 'c' };
```

## 지원 버전

`Assign` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
