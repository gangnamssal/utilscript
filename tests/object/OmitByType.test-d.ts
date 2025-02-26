import { Expect, Equal } from '../../src/commonness';
import { OmitByType } from '../../src/object';

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>
  >,
  Expect<
    Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>
  >,
];
