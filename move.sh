git pull
cd vultr-show
npm install
npm run build
cd ..
echo "removing and copying....."
rm -rf /etc/nginx/html2/
#mkdir /etc/nginx/html2
cp -r ./vultr-show/dist/ /etc/nginx/html2/
/etc/nginx/sbin/nginx -s reload
git checkout -- .
