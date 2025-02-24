import { Equal, Expect } from '../../commonness';

/**
 * DeepReadonly
 *
 * 객체의 모든 속성을 읽기 전용으로 만드는 타입
 *
 * @param T Object / 객체
 * @returns DeepReadonly object / 읽기 전용 객체
 *
 * @example
 * const X = { x: { y: { z: string } } };
 *
 * type cases = [
 *   Expect<Equal<DeepReadonly<X>, { readonly x: { readonly y: { readonly z: string } } }>>,
 * ]
 */

export type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
    ? T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k];
};

/**
 * 테스트 코드
 */

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<DeepReadonly<X1>, Expected1>>,
    Expect<Equal<DeepReadonly<X2>, Expected2>>,
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
}
