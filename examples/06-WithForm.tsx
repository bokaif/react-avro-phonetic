// 06-WithForm.tsx — inside a form, the replacement plays nicely with form state
import { Avro } from '@bokaif/react-avro-phonetic';
import { useState, FormEvent } from 'react';

export function FormExample() {
  const [submitted, setSubmitted] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSubmitted(data.get('name') as string);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name (Bengali):
        <Avro>
          <input name="name" type="text" placeholder="amar naam..." />
        </Avro>
      </label>
      <button type="submit">Submit</button>
      {submitted && <p>Submitted: {submitted}</p>}
    </form>
  );
}
