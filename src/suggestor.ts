import { SuggestionBuilder } from './lib/suggestionbuilder';
import { DBSearch } from './lib/dbsearch';

const dbsearch = new DBSearch();
export const suggestor = new SuggestionBuilder(dbsearch);

export function getSuggestions(word: string, parse: (s: string) => string): string[] {
    if (!word) return [];

    const result = suggestor.suggest(word);
    
    // The result from SuggestionBuilder is an object { words: string[], prevSelection: number }
    if (result && result.words) {
        return result.words;
    }
    
    return [parse(word), word];
}
