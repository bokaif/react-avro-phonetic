
import { parse } from './src/index';

const cases = [
    { input: "ami", expected: "আমি" },
    { input: "banglay", expected: "বাংলায়" },
    { input: "gan", expected: "গান" },
    { input: "gai", expected: "গাই" },
    { input: "kheyechi", expected: "খেয়েছি" },
    { input: "r", expected: "র" },
    { input: "o", expected: "অ" }, // or similar
];

console.log("Running tests...");
let passed = 0;
for (const c of cases) {
    const got = parse(c.input);
    if (got === c.expected) {
        console.log(`[PASS] ${c.input} -> ${got}`);
        passed++;
    } else {
        console.error(`[FAIL] ${c.input} -> Expected ${c.expected}, Got ${got}`);
    }
}

if (passed === cases.length) {
    console.log("All tests passed!");
    process.exit(0);
} else {
    console.log(`${passed}/${cases.length} passed.`);
    process.exit(1);
}
