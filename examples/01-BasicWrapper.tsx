import React from 'react';
import { Avro } from '@bokaif/react-avro-phonetic';

export default function BasicWrapperExample() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Basic Wrapper Example</h2>
      <p>
        Simply wrap any text input (or textarea) with the `&lt;Avro&gt;` component. 
        It will automatically show phonetic suggestions floating near the cursor.
      </p>

      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="basic-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Standard HTML Input:
        </label>
        
        {/* Magic happens here! */}
        <Avro>
          <input 
            id="basic-input" 
            type="text" 
            placeholder="Type bangla in english letters (e.g., amar)"
            style={{ padding: '0.5rem', width: '300px', fontSize: '1rem' }}
          />
        </Avro>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <label htmlFor="basic-textarea" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Standard HTML Textarea:
        </label>
        
        <Avro>
          <textarea 
            id="basic-textarea" 
            rows={5}
            placeholder="Type multiple lines..."
            style={{ padding: '0.5rem', width: '300px', fontSize: '1rem' }}
          />
        </Avro>
      </div>
    </div>
  );
}
