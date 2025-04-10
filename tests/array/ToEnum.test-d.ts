import { Equal, Expect } from '../../src/commonness';
import { ToEnum } from '../../src/array';

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;

const Command = [
  'echo',
  'grep',
  'sed',
  'awk',
  'cut',
  'uniq',
  'head',
  'tail',
  'xargs',
  'shift',
] as const;

// 엣지 케이스 추가
const SingleItem = ['item'] as const;
const EmptyArray = [] as const;
const MixedCaseItems = ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'] as const;

// 성능 테스트를 위한 큰 배열
const LargeArray = [
  'item1',
  'item2',
  'item3',
  'item4',
  'item5',
  'item6',
  'item7',
  'item8',
  'item9',
  'item10',
  'item11',
  'item12',
  'item13',
  'item14',
  'item15',
  'item16',
  'item17',
  'item18',
  'item19',
  'item20',
  'item21',
  'item22',
  'item23',
  'item24',
  'item25',
  'item26',
  'item27',
  'item28',
  'item29',
  'item30',
] as const;

type cases = [
  Expect<Equal<ToEnum<[]>, {}>>,
  Expect<Equal<ToEnum<typeof EmptyArray>, {}>>,
  Expect<Equal<ToEnum<typeof SingleItem>, { readonly Item: 'item' }>>,
  Expect<Equal<ToEnum<typeof SingleItem, true>, { readonly Item: 0 }>>,
  Expect<
    Equal<
      ToEnum<typeof OperatingSystem>,
      {
        readonly MacOS: 'macOS';
        readonly Windows: 'Windows';
        readonly Linux: 'Linux';
      }
    >
  >,
  Expect<
    Equal<
      ToEnum<typeof OperatingSystem, true>,
      {
        readonly MacOS: 0;
        readonly Windows: 1;
        readonly Linux: 2;
      }
    >
  >,
  Expect<
    Equal<
      ToEnum<typeof Command>,
      {
        readonly Echo: 'echo';
        readonly Grep: 'grep';
        readonly Sed: 'sed';
        readonly Awk: 'awk';
        readonly Cut: 'cut';
        readonly Uniq: 'uniq';
        readonly Head: 'head';
        readonly Tail: 'tail';
        readonly Xargs: 'xargs';
        readonly Shift: 'shift';
      }
    >
  >,
  Expect<
    Equal<
      ToEnum<typeof Command, true>,
      {
        readonly Echo: 0;
        readonly Grep: 1;
        readonly Sed: 2;
        readonly Awk: 3;
        readonly Cut: 4;
        readonly Uniq: 5;
        readonly Head: 6;
        readonly Tail: 7;
        readonly Xargs: 8;
        readonly Shift: 9;
      }
    >
  >,
  Expect<
    Equal<
      ToEnum<typeof MixedCaseItems>,
      {
        readonly CamelCase: 'camelCase';
        readonly PascalCase: 'PascalCase';
        readonly Snake_case: 'snake_case';
        readonly 'Kebab-case': 'kebab-case';
      }
    >
  >,
  // 성능 테스트 케이스
  Expect<ToEnum<typeof LargeArray> extends Record<string, string> ? true : false>,
  Expect<ToEnum<typeof LargeArray, true> extends Record<string, number> ? true : false>,
];
