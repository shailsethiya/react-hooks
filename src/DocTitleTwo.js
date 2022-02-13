import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

export const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}
