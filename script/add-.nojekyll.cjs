const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const noJekyllPath = path.join(buildDir, '.nojekyll');

fs.writeFileSync(noJekyllPath, '');
