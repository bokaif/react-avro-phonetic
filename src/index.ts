import { AvroPhonetic } from './avro';
export { AvroInput, type AvroInputProps } from './AvroInput';

const avro = new AvroPhonetic();

export function parse(input: string): string {
    return avro.parse(input);
}

export default avro;
