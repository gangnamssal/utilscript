import { Equal, Expect } from '../../src/commonness';
import { Append } from '../../src/function/Append';

type Case1 = Append<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = Append<() => void, undefined>;
type Result2 = (x: undefined) => void;

type Case3 = Append<() => void, undefined, boolean>;
type Result3 = (x: undefined, y: boolean) => void;

type Case4 = Append<() => void, undefined, boolean, null>;
type Result4 = (x: undefined, y: boolean, z: null) => void;

type Case5 = Append<() => void, undefined, boolean, null, number>;
type Result5 = (x: undefined, y: boolean, z: null, a: number) => void;

type Case6 = Append<() => string, undefined, boolean, null, number, string>;
type Result6 = (x: undefined, y: boolean, z: null, a: number, b: string) => string;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  Expect<Equal<Case3, Result3>>,
  Expect<Equal<Case4, Result4>>,
  Expect<Equal<Case5, Result5>>,
  Expect<Equal<Case6, Result6>>,

  // @ts-expect-error: type error
  Append<unknown, undefined>,
];
