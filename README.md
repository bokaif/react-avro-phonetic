# react-avro-phonetic

Avro phonetic Bengali typing for any React input. Drop it in and get suggestions as you type — same behavior as [avro.im](https://avro.im).

**[Demo](https://bokaif.github.io/react-avro-phonetic/)**

```bash
npm install @bokaif/react-avro-phonetic
```

---

## Usage

### `<Avro>` — wrapper component

Wrap any `<input>` or `<textarea>`. Suggestions appear automatically.

```tsx
import { Avro } from '@bokaif/react-avro-phonetic';

function App() {
  return (
    <Avro>
      <input type="text" placeholder="amar sonar bangla..." />
    </Avro>
  );
}
```

Keyboard: `↑`/`↓` to navigate, `Enter` or `Space` to select, `Esc` to dismiss.

### `useAvro` — headless hook

Build your own UI around the engine.

```tsx
import { useAvro } from '@bokaif/react-avro-phonetic';

function MyInput() {
  const { inputRef, bindings, suggestions, isSuggesting, replaceWord } = useAvro();

  return (
    <div style={{ position: 'relative' }}>
      <input ref={inputRef} {...bindings} />

      {isSuggesting && (
        <ul>
          {suggestions.map((word) => (
            <li key={word} onMouseDown={(e) => { e.preventDefault(); replaceWord(word); }}>
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### `parse` — phonetic conversion

```ts
import { parse } from '@bokaif/react-avro-phonetic';

parse('ami banglay gan gai'); // আমি বাংলায় গান গাই
parse('boka');                // বকা
```

---

## Styling `<Avro>`

```tsx
<Avro
  dropdownStyle={{ background: '#1e1e1e', border: '1px solid #333' }}
  itemStyle={{ padding: '6px 12px', color: '#eee' }}
  activeItemStyle={{ background: '#0070f3', color: '#fff' }}
>
  <textarea rows={4} />
</Avro>
```

---

## License

MIT
