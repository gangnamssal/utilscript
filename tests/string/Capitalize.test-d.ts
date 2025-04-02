import { Equal, Expect } from '../../src/commonness';
import { Capitalize } from '../../src/string';

type cases = [
  Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<Capitalize<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<Capitalize<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<
    Equal<
      Capitalize<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>,
      'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'
    >
  >,
  Expect<Equal<Capitalize<''>, ''>>,

  // 엣지 케이스
  Expect<Equal<Capitalize<'123abc'>, '123Abc'>>,
  Expect<Equal<Capitalize<'_abc'>, '_Abc'>>,
  Expect<Equal<Capitalize<'!abc'>, '!Abc'>>,
  Expect<Equal<Capitalize<' abc'>, ' Abc'>>,
  Expect<Equal<Capitalize<'a'>, 'A'>>,
  Expect<Equal<Capitalize<'A'>, 'A'>>,
  Expect<Equal<Capitalize<'1'>, '1'>>,
  Expect<Equal<Capitalize<'!'>, '!'>>,
  Expect<Equal<Capitalize<'🤣'>, '🤣'>>,
  Expect<Equal<Capitalize<'한글'>, '한글'>>,
  Expect<Equal<Capitalize<'한글 테스트'>, '한글 테스트'>>,
  Expect<Equal<Capitalize<'a한글'>, 'A한글'>>,
];
