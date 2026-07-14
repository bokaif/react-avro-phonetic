// 08-MultipleInputs.tsx — multiple Avro inputs on the same page
import { Avro } from '@bokaif/react-avro-phonetic';

export function MultipleInputs() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Avro>
        <input type="text" placeholder="First name (e.g. rahim)" />
      </Avro>
      <Avro>
        <input type="text" placeholder="Last name (e.g. uddin)" />
      </Avro>
      <Avro>
        <textarea rows={3} placeholder="Address (e.g. dhaka, bangladesh)" />
      </Avro>
    </div>
  );
}
