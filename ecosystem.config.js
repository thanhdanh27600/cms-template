module.exports = {
  apps: [
    {
      name: 'backend-name',
      cwd: 'backend/',
      script: 'node',
      args: 'dist/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend-name',
      cwd: 'frontend/',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
