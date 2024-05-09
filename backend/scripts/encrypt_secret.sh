echo "Encrypt ENV"
gpg -o .env.gpg --symmetric --cipher-algo AES256 .env
