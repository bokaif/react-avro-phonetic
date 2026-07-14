import { getSuggestions, suggestor } from './suggestor';
import { parse } from './index';

const suggestions = getSuggestions('boka', parse);
console.log('Suggestions for "boka":', suggestions);
