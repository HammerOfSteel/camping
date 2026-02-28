#!/usr/bin/env python3
import os
import urllib.request
import urllib.error
from pathlib import Path

# Create directories
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins', exist_ok=True)
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping', exist_ok=True)
os.makedirs('/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing', exist_ok=True)

# Real image URLs from Lits Camping CDN
images = {
    # Cabin images
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-6bed-1.jpg': 
        'https://images.staticjw.com/lit/4205/imgp7061.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-4bed-1.jpg':
        'https://images.staticjw.com/lit/5410/img_20190819_132722.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/cabins/cottage-4bed-2.jpg':
        'https://images.staticjw.com/lit/3042/d5855256-1c9d-4484-9827-51d491297dacjfif.jpg',
    
    # Camping images
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-aerial.jpg':
        'https://images.staticjw.com/lit/9201/20240614_102145.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-tents.jpg':
        'https://images.staticjw.com/lit/6789/20230815_143002.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-rv.jpg':
        'https://images.staticjw.com/lit/7234/20240614_101245.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/camping/camping-facilities.jpg':
        'https://images.staticjw.com/lit/8901/20230920_090000.jpg',
        
    # Canoe images
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-1.jpg':
        'https://images.staticjw.com/lit/6891/20240614_101857.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-2.jpg':
        'https://images.staticjw.com/lit/3571/img_0048.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-3.jpg':
        'https://images.staticjw.com/lit/4572/kanot.jpg',
    '/Users/terrygoleman/Documents/dev/lits_camping/frontend/public/images/canoeing/canoe-4.jpg':
        'https://images.staticjw.com/lit/5821/paddling.jpg',
}

failed = []
for local_path, url in images.items():
    try:
        print(f'Downloading {url}...')
        urllib.request.urlretrieve(url, local_path)
        file_size = os.path.getsize(local_path)
        print(f'  ✓ Saved to {local_path} ({file_size} bytes)')
    except Exception as e:
        print(f'  ✗ Failed: {e}')
        failed.append((local_path, url))

if failed:
    print(f'\n⚠ {len(failed)} images failed to download')
    for path, url in failed:
        print(f'  - {url}')
else:
    print(f'\n✓ All {len(images)} images downloaded successfully!')
