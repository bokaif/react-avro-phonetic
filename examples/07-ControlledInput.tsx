// 07-ControlledInput.tsx — controlled value + Avro
// The hook handles the word replacement internally, but you can still
// read the final value via onChange.
import { Avro } from '@bokaif/react-avro-phonetic';
import { useState } from 'react';

export function ControlledExample() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Avro onChange={(e) => setValue(e.target.value)}>
        <input type="text" placeholder="Type here..." />
      </Avro>
      <p>Raw value: <code>{value}</code></p>
    </div>
  );
}
