import React from 'react';
import { useAvro } from '@bokaif/react-avro-phonetic';

export default function HeadlessHookExample() {
  const {
    inputRef,
    bindings,
    suggestions,
    activeIndex,
    isSuggesting,
    caretCoords,
    replaceWord,
    setActiveIndex
  } = useAvro({
    onChange: (e) => console.log('Input changed:', e.target.value)
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Headless Hook Example</h2>
      <p>
        Use `useAvro` to build your own completely custom UI, including exactly how and where 
        suggestions are rendered.
      </p>

      <div style={{ position: 'relative', marginTop: '1rem' }}>
        <input 
          ref={inputRef}
          {...bindings}
          type="text" 
          placeholder="Headless input..."
          style={{ padding: '0.5rem', width: '300px', fontSize: '1rem' }}
        />

        {/* Custom Suggestion Renderer */}
        {isSuggesting && suggestions.length > 0 && (
          <div style={{
            position: 'absolute',
            top: caretCoords.top + caretCoords.height + 5,
            left: caretCoords.left,
            background: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 50
          }}>
            <div style={{ padding: '4px', background: '#eee', fontSize: '0.8rem' }}>
              Select a suggestion:
            </div>
            {suggestions.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  background: activeIndex === idx ? '#007bff' : 'transparent',
                  color: activeIndex === idx ? 'white' : 'black'
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  replaceWord(s);
                }}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
