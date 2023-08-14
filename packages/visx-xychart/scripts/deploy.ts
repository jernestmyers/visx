const ghpages = require('gh-pages');

function deploy() {
  ghpages.publish('./', {
    src: ['./esm/**', './lib/**', 'package.json', 'README.md', 'tsconfig.json'],
    branch: 'visx-xychart',
  });
}

deploy();
