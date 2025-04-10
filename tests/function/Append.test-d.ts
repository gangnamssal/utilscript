import { Equal, Expect } from '../../src/commonness';
import { Append } from '../../src/function/Append';

type Case1 = Append<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = Append<() => void, undefined>;
type Result2 = (x: undefined) => void;

type Case3 = Append<() => void, [undefined, boolean]>;
type Result3 = (x: undefined, y: boolean) => void;

type Case4 = Append<() => void, [undefined, boolean, null]>;
type Result4 = (x: undefined, y: boolean, z: null) => void;

type Case5 = Append<() => void, [undefined, boolean, null, number]>;
type Result5 = (x: undefined, y: boolean, z: null, a: number) => void;

type Case6 = Append<() => string, [undefined, boolean, null, number, string]>;
type Result6 = (x: undefined, y: boolean, z: null, a: number, b: string) => string;

// 엣지 케이스 추가
type Case7 = Append<(a: string) => Promise<boolean>, never>;
type Result7 = (a: string, x: never) => Promise<boolean>;

type Case8 = Append<(a: number, b: string) => number, []>;
type Result8 = (a: number, b: string) => number;

type Case9 = Append<(a: number) => string, any>;
type Result9 = (a: number, x: any) => string;

// 성능 테스트
type LargeTuple = [
  number,
  string,
  boolean,
  null,
  undefined,
  number,
  string,
  boolean,
  null,
  undefined,
  number,
  string,
  boolean,
  null,
  undefined,
  number,
  string,
  boolean,
  null,
  undefined,
  number,
  string,
  boolean,
  null,
  undefined,
];

type ComplexFunction = (
  a: number,
  b: string,
  c: boolean,
  d: null,
  e: undefined,
  f: number[],
  g: string[],
  h: Record<string, number>,
  i: Promise<boolean>,
  j: () => void,
) => string;

type PerformanceCase1 = Append<ComplexFunction, LargeTuple>;
type PerformanceCase2 = Append<ComplexFunction, [LargeTuple, LargeTuple]>;
type PerformanceCase3 = Append<() => void, LargeTuple>;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  Expect<Equal<Case3, Result3>>,
  Expect<Equal<Case4, Result4>>,
  Expect<Equal<Case5, Result5>>,
  Expect<Equal<Case6, Result6>>,
  Expect<Equal<Case7, Result7>>,
  Expect<Equal<Case8, Result8>>,
  Expect<Equal<Case9, Result9>>,

  Expect<Equal<PerformanceCase3, (...args: [...LargeTuple]) => void>>,

  // @ts-expect-error: type error
  Append<unknown, undefined>,
  // @ts-expect-error: 함수 타입이 아닌 경우
  Append<string, boolean>,
  // @ts-expect-error: 함수 타입이 아닌 경우
  Append<number, string>,
];
