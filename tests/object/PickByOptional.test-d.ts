import { Expect, Equal } from '../../src/commonness';
import { PickByOptional } from '../../src/object';

type cases = [
  Expect<Equal<PickByOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<PickByOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
];
