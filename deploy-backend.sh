echo "Deploying Backend..."

git pull

cd backend

yarn
yarn build
pm2 reload backend-name --force


cd ..
