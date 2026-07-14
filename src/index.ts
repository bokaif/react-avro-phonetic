import { AvroPhonetic } from './avro';
export { AvroInput, type AvroInputProps } from './AvroInput';
export { Avro, type AvroProps } from './components/Avro';
export { useAvro, type UseAvroProps } from './hooks/useAvro';
export { SuggestionBuilder } from './lib/suggestionbuilder';

const avro = new AvroPhonetic();

export function parse(input: string): string {
    return avro.parse(input);
}

export default avro;
