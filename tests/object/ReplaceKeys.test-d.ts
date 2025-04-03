import { Equal, Expect } from '../../src/commonness';
import { ReplaceKeys } from '../../src/object';

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

type NoNameNodeA = {
  type: 'A';
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: 'C';
  flag: number;
  name: never;
};

type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

type cases = [
  Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
  Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,

  // 엣지 케이스
  Expect<Equal<ReplaceKeys<{}, 'key', { value: number }>, {}>>,
  Expect<Equal<ReplaceKeys<{ a: undefined }, 'a', { a: string }>, { a: string }>>,
  Expect<Equal<ReplaceKeys<{ a: null }, 'a', { a: string }>, { a: string }>>,
  Expect<Equal<ReplaceKeys<{ a: never }, 'a', { a: string }>, { a: string }>>,
  Expect<Equal<ReplaceKeys<{ a: unknown }, 'a', { a: string }>, { a: string }>>,
  Expect<Equal<ReplaceKeys<{ a: any }, 'a', { a: string }>, { a: string }>>,
  Expect<Equal<ReplaceKeys<{ 'a-b': number }, 'a-b', { 'a-b': string }>, { 'a-b': string }>>,
  Expect<
    Equal<
      ReplaceKeys<{ [k: string]: number }, string, { [k: string]: boolean }>,
      { [k: string]: boolean }
    >
  >,
  Expect<
    Equal<
      ReplaceKeys<{ [k: number]: string }, number, { [k: number]: boolean }>,
      { [k: number]: boolean }
    >
  >,
  Expect<Equal<ReplaceKeys<{ a: string | number }, 'a', { a: boolean }>, { a: boolean }>>,
  Expect<Equal<ReplaceKeys<{ a: string }, 'b', { b: number }>, { a: string }>>,
];
