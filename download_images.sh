#!/bin/bash
cd /Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images

echo "Downloading camping and canoe images with proper headers..."

curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o camping-1.jpg "https://images.staticjw.com/lit/5821/20161123_153630.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o camping-2.jpg "https://images.staticjw.com/lit/5821/img_2622.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o camping-3.jpg "https://images.staticjw.com/lit/3042/20150808_151616.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o camping-4.jpg "https://images.staticjw.com/lit/5821/20170522_132527.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o canoe-1.jpg "https://images.staticjw.com/lit/6891/20240614_101857.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o canoe-2.jpg "https://images.staticjw.com/lit/3571/img_0048.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o canoe-3.jpg "https://images.staticjw.com/lit/4572/kanot.jpg"
curl -A "Mozilla/5.0" -e "https://www.litscamping.com/" -o canoe-4.jpg "https://images.staticjw.com/lit/5821/paddling.jpg"

echo "Download complete! Checking files..."
ls -lh
