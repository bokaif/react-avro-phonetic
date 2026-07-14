# @bokaif/react-avro-phonetic

A headless hook and wrapper component for adding Avro phonetic Bengali typing to any React application. 

Provides floating word suggestions as you type, just like the official Avro software, while giving you complete control over styling and behavior.

## Installation

```bash
npm install @bokaif/react-avro-phonetic
```

## Quick Start (Wrapper Component)

Wrap any standard HTML `input` or `textarea` (or any custom UI component that accepts standard `ref`, `onChange`, and `onKeyDown` props).

```tsx
import { Avro } from '@bokaif/react-avro-phonetic';

export default function App() {
  return (
    <Avro>
      <input type="text" placeholder="Type in English (e.g., amar)" />
    </Avro>
  );
}
```
*A suggestion dropdown will automatically appear at your cursor.*

## Headless Hook (`useAvro`)

For complete control over the UI and dropdown positioning, use the headless hook. 

```tsx
import { useAvro } from '@bokaif/react-avro-phonetic';

export default function CustomInput() {
  const { 
    inputRef, 
    bindings, 
    suggestions, 
    isSuggesting, 
    replaceWord 
  } = useAvro();

  return (
    <div style={{ position: 'relative' }}>
      <input ref={inputRef} {...bindings} />
      
      {isSuggesting && (
        <div className="absolute top-full left-0 bg-white border">
          {suggestions.map(word => (
            <div key={word} onMouseDown={(e) => {
              e.preventDefault();
              replaceWord(word);
            }}>
              {word}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Raw API

Convert phonetic English to Bengali programmatically:

```typescript
import { parse } from '@bokaif/react-avro-phonetic';

console.log(parse("ami banglay gan gai")); // আমি বাংলায় গান গাই
```

## Styling the Wrapper

You can pass inline styles directly to the `<Avro>` component to match your theme.

```tsx
<Avro 
  dropdownStyle={{ background: '#fff', border: '1px solid #ccc' }}
  itemStyle={{ padding: '8px', color: '#333' }}
  activeItemStyle={{ background: '#f0f0f0' }}
>
  <textarea />
</Avro>
```
