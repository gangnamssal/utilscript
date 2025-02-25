import { Equal, Expect } from '../../commonness';

/**
 * Replace the type of specified keys in an object
 *
 * 객체에서 지정된 키의 타입을 변경
 *
 * @param U Object / 객체
 * @param T Keys to replace / 변경할 키
 * @param Y New types for keys / 키의 새로운 타입
 * @returns Object with replaced key types / 키 타입이 변경된 객체
 *
 * @example
 * type NodeA = {
 *   type: 'A';
 *   name: string;
 *   flag: number;
 * };
 *
 * type ReplacedNodeA = {
 *   type: 'A';
 *   name: number;
 *   flag: string;
 * };
 *
 * type cases = [
 *   Expect<Equal<ReplaceKeys<NodeA, 'name' | 'flag', {name: number; flag: string}>, ReplacedNodeA>>
 * ];
 */

export type ReplaceKeys<U, T extends string, Y extends Record<any, any>> = {
  [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P];
};

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
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
    Expect<
      Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>
    >,
    Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,
  ];
}
