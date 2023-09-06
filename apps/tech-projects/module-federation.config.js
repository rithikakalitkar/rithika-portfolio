module.exports = {
  name: 'tech-projects',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/remote-entry.ts',
  }
};
