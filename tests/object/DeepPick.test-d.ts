import { DeepPick } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | ''>, { a: number } & unknown>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
  Expect<
    Equal<
      DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>,
      { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
    >
  >,
  Expect<
    Equal<DeepPick<Obj, 'a' | 'obj.e' | ''>, { a: number } & { obj: { e: string } } & unknown>
  >,

  // 엣지 케이스
  Expect<Equal<DeepPick<Obj, never>, unknown>>,
  Expect<Equal<DeepPick<{}, 'a'>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'nonexistent'>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'obj.nonexistent'>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'obj.obj2.nonexistent'>, unknown>>,
  Expect<
    Equal<
      DeepPick<Obj, 'a' | 'b' | 'c'>,
      {
        a: number;
      } & {
        b: string;
      } & {
        c: boolean;
      }
    >
  >,
  Expect<Equal<DeepPick<Obj, 'obj3'>, { obj3: { j: number; k: string; l: boolean } }>>,
  Expect<Equal<DeepPick<Obj, 'obj.obj2'>, { obj: { obj2: { g: number; h: string; i: boolean } } }>>,
];
