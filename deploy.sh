set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/azusa5526/sonic-star.git deploy:gh-pages

cd -