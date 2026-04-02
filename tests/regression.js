const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const buildScript = path.join(repoRoot, 'build-output.js');
const actualPath = path.join(repoRoot, 'build', 'scss', '_tokens.scss');
const expectedPath = path.join(__dirname, 'fixtures', '_tokens.scss');

function normalize(content) {
  const lines = content.split(/\r?\n/);
  let i = 0;

  while (i < lines.length && lines[i].trim() === '') i += 1;
  while (i < lines.length && lines[i].trim().startsWith('//')) i += 1;
  while (i < lines.length && lines[i].trim() === '') i += 1;

  return lines.slice(i).join('\n').trimEnd();
}

function readNormalized(filePath) {
  return normalize(fs.readFileSync(filePath, 'utf8'));
}

try {
  execFileSync(process.execPath, [buildScript], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
} catch (error) {
  console.error('Build failed; regression test aborted.');
  process.exit(1);
}

if (!fs.existsSync(expectedPath)) {
  console.error('Missing expected snapshot at tests/fixtures/_tokens.scss');
  process.exit(1);
}

const actual = readNormalized(actualPath);
const expected = readNormalized(expectedPath);

if (actual !== expected) {
  const actualLines = actual.split('\n');
  const expectedLines = expected.split('\n');
  const max = Math.max(actualLines.length, expectedLines.length);
  let mismatch = -1;

  for (let idx = 0; idx < max; idx += 1) {
    if (actualLines[idx] !== expectedLines[idx]) {
      mismatch = idx;
      break;
    }
  }

  if (mismatch >= 0) {
    console.error(`Regression mismatch at line ${mismatch + 1}`);
    console.error(`Expected: ${expectedLines[mismatch] || ''}`);
    console.error(`Actual:   ${actualLines[mismatch] || ''}`);
  } else {
    console.error('Regression mismatch: content differs.');
  }

  process.exit(1);
}

console.log('Regression OK: build output matches snapshot.');
