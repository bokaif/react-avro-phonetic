import React from 'react';
import { Avro } from '@bokaif/react-avro-phonetic';

export default function CustomStylesExample() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Custom Styled Dropdown</h2>
      <p>
        You can pass `dropdownStyle`, `itemStyle`, and `activeItemStyle` to the `&lt;Avro&gt;` 
        component to match your app's theme perfectly.
      </p>

      <div style={{ marginTop: '1rem' }}>
        <Avro
          dropdownStyle={{
            background: '#ffffff',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            minWidth: '200px'
          }}
          itemStyle={{
            padding: '10px 16px',
            color: '#4a5568',
            fontSize: '14px',
            borderBottom: '1px solid #edf2f7'
          }}
          activeItemStyle={{
            background: '#ebf8ff',
            color: '#2b6cb0',
            fontWeight: 'bold'
          }}
        >
          <input 
            type="text" 
            placeholder="Type bangla here..."
            style={{ 
              padding: '0.75rem', 
              width: '300px', 
              fontSize: '1rem',
              border: '2px solid #cbd5e0',
              borderRadius: '6px'
            }}
          />
        </Avro>
      </div>
    </div>
  );
}
