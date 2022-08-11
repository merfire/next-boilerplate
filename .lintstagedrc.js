module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --ignore-unknown --write ${filenames.join(' ')}`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(html|css|scss|json|md)': filenames => `prettier --ignore-unknown --write ${filenames.join(' ')}`,
};
