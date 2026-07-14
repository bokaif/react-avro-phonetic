// 05-Textarea.tsx — Avro on a textarea
import { Avro } from '@bokaif/react-avro-phonetic';

export function TextareaExample() {
  return (
    <Avro>
      <textarea
        rows={6}
        cols={40}
        placeholder="Type phonetic Bengali here..."
        style={{ fontFamily: 'serif', fontSize: '1.2rem' }}
      />
    </Avro>
  );
}
