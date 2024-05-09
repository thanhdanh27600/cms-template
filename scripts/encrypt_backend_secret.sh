echo "Encrypt ENV"
cd backend
gpg -o .env.gpg --symmetric --cipher-algo AES256 .env
