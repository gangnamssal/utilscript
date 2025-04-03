import { DeepReadonly } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
  // 엣지 케이스
  Expect<Equal<DeepReadonly<{}>, {}>>,
  Expect<Equal<DeepReadonly<[]>, readonly []>>,
  Expect<Equal<DeepReadonly<null>, null>>,
  Expect<Equal<DeepReadonly<undefined>, undefined>>,
  Expect<Equal<DeepReadonly<string>, string>>,
  Expect<Equal<DeepReadonly<number>, number>>,
  Expect<Equal<DeepReadonly<boolean>, boolean>>,
  Expect<Equal<DeepReadonly<{ readonly a: number }>, { readonly a: number }>>,
  Expect<Equal<DeepReadonly<readonly string[]>, readonly string[]>>,
];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        },
      ];
    };
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        },
      ];
    };
  };
};

type Expected2 = { readonly a: string } | { readonly b: number };
