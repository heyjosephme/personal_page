#!/usr/bin/env node
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

// Get commit hash
const commitHash = execSync('git rev-parse HEAD 2>/dev/null || echo "unknown"')
  .toString()
  .trim();

// Get build date
const buildDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

// Write to a TS file
const content = `// Auto-generated at build time
export const VERSION = {
  commitHash: '${commitHash}',
  buildDate: '${buildDate}',
};
`;

writeFileSync('./src/version.ts', content);
console.log('✓ Generated version.ts with commit:', commitHash.slice(0, 7));
