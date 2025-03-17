---
sidebar_position: 21
---

# ReplaceKeys

`ReplaceKeys`는 객체 타입에서 지정된 키의 타입을 다른 타입으로 변경하는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 특정 키들의 타입을 다른 타입으로 변경하고 싶을 때 유용합니다. 변경하지 않은 키들은 원래 타입을 유지합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type ReplacedNodeA = {
  type: 'A';
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: 'B';
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: 'C';
  name: number;
  flag: string;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;

type T = O.ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>; // ReplacedNodes
```

## 지원 버전

`ReplaceKeys` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
