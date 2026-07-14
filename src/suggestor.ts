export const charVariations: Record<string, string[]> = {
    'a': ['a', 'o', 'e', 'ya', 'a:', 'aZ'],
    'o': ['o', 'u', 'a', 'O'],
    'e': ['e', 'i', 'a', 'E'],
    'i': ['i', 'e', 'ee', 'I'],
    'u': ['u', 'o', 'oo', 'U'],
    's': ['s', 'sh', 'S'],
    't': ['t', 'T', 'th'],
    'd': ['d', 'D', 'dh'],
    'n': ['n', 'N'],
    'r': ['r', 'R'],
    'k': ['k', 'K', 'kh'],
    'g': ['g', 'G', 'gh'],
    'c': ['c', 'ch', 'C'],
    'j': ['j', 'J', 'jh'],
    'p': ['p', 'P', 'ph'],
    'b': ['b', 'B', 'bh'],
    'm': ['m', 'M'],
    'l': ['l', 'L'],
    'v': ['v', 'bh'],
    'y': ['y', 'j']
};

export function getSuggestions(word: string, parse: (s: string) => string): string[] {
    if (!word) return [];

    const suggestions = new Set<string>();
    
    // Add primary translation
    suggestions.add(parse(word));

    // Hardcoded overrides for common single letters based on Avro phonetic spec
    if (word.toLowerCase() === 'a') {
        ['আ', 'আঃ', 'া', 'এ', 'অ্যা', 'অ্যাঁ'].forEach(v => suggestions.add(v));
    }
    if (word.toLowerCase() === 'o') {
        ['ও', 'অ', 'ো'].forEach(v => suggestions.add(v));
    }
    if (word.toLowerCase() === 'e') {
        ['এ', 'ই', 'ে', 'ি'].forEach(v => suggestions.add(v));
    }

    // Generate variations by swapping characters (right to left focus)
    const chars = word.split('');
    let substitutedCount = 0;

    for (let i = chars.length - 1; i >= 0 && substitutedCount < 2; i--) {
        const c = chars[i].toLowerCase();
        if (charVariations[c]) {
            for (const alt of charVariations[c]) {
                if (alt.toLowerCase() === c) continue;
                
                // create new word
                const altWord = word.substring(0, i) + alt + word.substring(i + 1);
                suggestions.add(parse(altWord));
            }
            substitutedCount++;
        }
    }

    // Always add the raw english word at the end
    suggestions.add(word);

    return Array.from(suggestions);
}
