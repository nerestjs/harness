import React from 'react';

import S from './index.module.css';

type Props = {
  greeting: string;
};

export default function Foo({ greeting = 'Hello' }: Props) {
  return <div className={S.root}>{greeting} from Nerest micro frontend</div>;
}
