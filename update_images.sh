#!/bin/bash
# Update camping page URLs
sed -i 's|https://images.staticjw.com/lit/5821/20161123_153630.jpg|/images/camping-1.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/camping/page.tsx
sed -i 's|https://images.staticjw.com/lit/5821/img_2622.jpg|/images/camping-2.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/camping/page.tsx
sed -i 's|https://images.staticjw.com/lit/3042/20150808_151616.jpg|/images/camping-3.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/camping/page.tsx
sed -i 's|https://images.staticjw.com/lit/5821/20170522_132527.jpg|/images/camping-4.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/camping/page.tsx

# Update canoeing page URLs
sed -i 's|https://images.staticjw.com/lit/6891/20240614_101857.jpg|/images/canoe-1.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/canoeing/page.tsx
sed -i 's|https://images.staticjw.com/lit/3571/img_0048.jpg|/images/canoe-2.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/canoeing/page.tsx
sed -i 's|https://images.staticjw.com/lit/4572/kanot.jpg|/images/canoe-3.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/canoeing/page.tsx
sed -i 's|https://images.staticjw.com/lit/5821/paddling.jpg|/images/canoe-4.jpg|g' /Users/terrygoleman/Documents/dev/lits_camping/frontend/src/app/canoeing/page.tsx

echo "Image URLs updated successfully!"
