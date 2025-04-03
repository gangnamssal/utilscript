import { Equal, Expect } from '../../src/commonness';
import { MapTypes } from '../../src/object';

type cases = [
  Expect<
    Equal<
      MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>,
      { stringToArray: [] }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>,
      { stringToNumber: number }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { stringToNumber: string; skipParsingMe: boolean },
        { mapFrom: string; mapTo: number }
      >,
      { stringToNumber: number; skipParsingMe: boolean }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { date: string },
        { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }
      >,
      { date: null | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>,
      { date: null | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { fields: Record<string, boolean> },
        { mapFrom: Record<string, boolean>; mapTo: string[] }
      >,
      { fields: string[] }
    >
  >,
  Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
  Expect<
    Equal<
      MapTypes<
        { name: string; date: Date },
        { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
      >,
      { name: boolean; date: string }
    >
  >,

  // 엣지 케이스
  Expect<Equal<MapTypes<{}, { mapFrom: string; mapTo: number }>, {}>>,
  Expect<Equal<MapTypes<{ a: undefined }, { mapFrom: undefined; mapTo: null }>, { a: null }>>,
  Expect<Equal<MapTypes<{ a: null }, { mapFrom: null; mapTo: undefined }>, { a: undefined }>>,
  Expect<Equal<MapTypes<{ a: never }, { mapFrom: never; mapTo: string }>, { a: string }>>,
  Expect<Equal<MapTypes<{ a: unknown }, { mapFrom: unknown; mapTo: string }>, { a: string }>>,
  Expect<Equal<MapTypes<{ a: any }, { mapFrom: any; mapTo: string }>, { a: string }>>,
  Expect<
    Equal<
      MapTypes<
        { a: string | number },
        { mapFrom: string; mapTo: boolean } | { mapFrom: number; mapTo: Date }
      >,
      { a: boolean | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { a: string; b: number; c: boolean },
        { mapFrom: string; mapTo: null } | { mapFrom: number; mapTo: null }
      >,
      { a: null; b: null; c: boolean }
    >
  >,
];
