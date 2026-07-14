// 04-ParseAPI.tsx — use the parse function directly, no UI
import { parse } from '@bokaif/react-avro-phonetic';

const words = ['ami', 'bangla', 'boka', 'sundor', 'dhaka', 'valobashi'];

export function ParseDemo() {
  return (
    <table>
      <thead>
        <tr>
          <th>Input</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        {words.map((w) => (
          <tr key={w}>
            <td>{w}</td>
            <td>{parse(w)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
