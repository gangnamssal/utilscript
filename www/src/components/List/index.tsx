import { P } from 'utilscript';

type ListProps<T extends P.Tuple> =
  T extends P.Tuple<infer U>
    ? { list: T; render: (args: U, index: number) => React.JSX.Element }
    : never;

export function List<T extends P.Tuple>({ list, render }: ListProps<T>) {
  return <>{list.map((item, index) => render(item, index))}</>;
}
