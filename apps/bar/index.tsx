import React from 'react';

type Props = {
  greeting: string;
};

export default function Bar({ greeting = 'Hello' }: Props) {
  return <div>{greeting} from the Bar app</div>;
}
