import { Equal, Expect } from '../../src/commonness';
import { SnakeCase } from '../../src/string';

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<
    Equal<
      SnakeCase<'getElementById' | 'getElementByClassNames'>,
      'get_element_by_id' | 'get_element_by_class_names'
    >
  >,
];
