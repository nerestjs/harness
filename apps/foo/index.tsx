import React, { useState } from 'react';

import S from './index.module.css';

type Props = {
  greeting: string;
};

export default function Foo({ greeting = 'Hello' }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className={S.root} onClick={() => setCount((c) => c + 1)}>
      <div>{greeting} from Nerest micro frontend</div>
      <div>Clicks: {count}</div>
    </div>
  );
}
