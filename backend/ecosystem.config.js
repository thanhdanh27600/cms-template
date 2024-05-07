module.exports = {
  apps: [
    {
      name: 'backend-example',
      cwd: './',
      script: 'node',
      args: 'dist/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
