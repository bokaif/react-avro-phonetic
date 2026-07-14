import { Avro } from '@bokaif/react-avro-phonetic'
import './App.css'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2563eb' }}>
        React Avro Phonetic
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '3rem' }}>
        Type English phonetic → press <kbd>Space</kbd> or <kbd>Enter</kbd> → converts to Bengali.
      </p>

      <div style={{ background: '#f3f4f6', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'left' }}>
        <h2 style={{ marginTop: 0, color: '#1f2937' }}>Try it</h2>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
          Type <i>ami</i>, <i>boka</i>, <i>bangladesh</i>, <i>bhalo</i>… then press space.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Input</label>
          <Avro>
            <input
              type="text"
              placeholder="ami sonar bangla..."
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1.1rem',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </Avro>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Textarea</label>
          <Avro>
            <textarea
              rows={5}
              placeholder="Multi-line works too..."
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1.1rem',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </Avro>
        </div>
      </div>

      <div style={{ marginTop: '3rem', color: '#6b7280' }}>
        <p>Built by bokaif. <a href="https://github.com/bokaif/react-avro-phonetic" style={{ color: '#2563eb' }}>GitHub</a> · <a href="https://www.npmjs.com/package/@bokaif/react-avro-phonetic" style={{ color: '#2563eb' }}>npm</a></p>
      </div>
    </div>
  )
}

export default App
