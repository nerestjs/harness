import React from 'react';

type Props = {
  greeting: string;
};

export default function Foo({ greeting = 'Hello' }: Props) {
  return <div>{greeting} from Nerest micro frontend</div>;
}
