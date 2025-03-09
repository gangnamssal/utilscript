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
];
