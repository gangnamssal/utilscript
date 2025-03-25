import { ReactNode } from 'react';

type ListProps<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer U>
    ? { list: T; render: (args: U, index: number) => ReactNode }
    : never;

export function List<T extends ReadonlyArray<unknown>>({ list, render }: ListProps<T>) {
  return <>{list.map((item, index) => render(item, index))}</>;
}
