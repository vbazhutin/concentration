module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server.js',
  resolve: {
    modules: ['db', 'node_modules'],
  },
};
