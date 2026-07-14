
import { Avro } from '@bokaif/react-avro-phonetic'
import './App.css'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2563eb' }}>
        React Avro Phonetic
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '3rem' }}>
        A beautiful, headless phonetic Bengali typing experience for React.
      </p>

      <div style={{ background: '#f3f4f6', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'left' }}>
        <h2 style={{ marginTop: 0, color: '#1f2937' }}>Try it out</h2>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          Wrap any input with the <code>&lt;Avro&gt;</code> component and type in English (e.g. <i>amar sonar bangla</i>).
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Standard Input</label>
          <Avro>
            <input 
              type="text" 
              placeholder="Start typing..." 
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1.1rem',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
              }}
            />
          </Avro>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Textarea with Custom Dropdown Theme</label>
          <Avro
            dropdownStyle={{ background: '#1f2937', color: 'white', borderRadius: '8px', overflow: 'hidden' }}
            itemStyle={{ padding: '10px 16px', borderBottom: '1px solid #374151' }}
            activeItemStyle={{ background: '#3b82f6', color: 'white' }}
          >
            <textarea 
              rows={4}
              placeholder="Multi-line typing works too!" 
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1.1rem',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </Avro>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', color: '#6b7280' }}>
        <p>Built by bokaif. <a href="https://github.com/bokaif/react-avro-phonetic" style={{ color: '#2563eb' }}>View on GitHub</a></p>
      </div>
    </div>
  )
}

export default App
