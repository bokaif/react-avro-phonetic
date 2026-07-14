# react-avro-phonetic

A robust, blazing fast, and bug-free implementation of the Avro Phonetic keyboard algorithm for JavaScript and TypeScript. 
Inspired by `jsAvroPhonetic`, this package provides the core phonetic parsing logic without any external dependencies (like jQuery).

## Installation

```bash
npm install react-avro-phonetic
```

## Usage

This package supports both **CommonJS** and **ES Modules**.

### TypeScript / ES Modules (Frontend - React, Vue, Vite, etc.)
```typescript
import { parse } from 'react-avro-phonetic';

const bangla = parse("ami banglay gan gai");
console.log(bangla); // আমি বাংলায় গান গাই
```

### CommonJS (Node.js)
```javascript
const { parse } = require('react-avro-phonetic');
```

## Features

- **Blazing Fast**: Optimized string parsing.
- **TypeScript Support**: First-class type definitions.
- **Dependency Free**: Zero dependencies.
- **Bug Free**: Logic directly ported and verified against the original algorithm.
