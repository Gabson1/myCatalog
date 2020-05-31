const path = require('path');
const fs = require('fs');

const projectRootDir = fs.realpathSync(process.cwd());
const relativePathResolver = relativePath => path.resolve(projectRootDir, relativePath);

const clientEntryPoint = relativePathResolver(path.join('src', 'client', 'client.tsx'));
const clientRootDir = relativePathResolver(path.join('src', 'client'));
const clientOutputDir = relativePathResolver(path.join('build', 'client'));

const serverEntryPoint = relativePathResolver(path.join('src', 'server', 'server.ts'));
const serverRootDir = relativePathResolver(path.join('src', 'server'));
const serverOutputDir = relativePathResolver(path.join('build', 'server'));

module.exports = {
  projectRootDir,
  relativePathResolver,
  clientEntryPoint,
  clientRootDir,
  clientOutputDir,
  serverEntryPoint,
  serverRootDir,
  serverOutputDir,
};
